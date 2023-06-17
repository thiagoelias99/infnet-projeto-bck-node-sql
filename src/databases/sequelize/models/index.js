'use strict';

const mariadb = require('mariadb');
const Sequelize = require('sequelize');
const process = require('process');
const dotenv = require("dotenv");
dotenv.config()

const dbConfig = {
  database: process.env.DATABASE_NAME || "infnet_telias4",
  username: process.env.DATABASE_USERNAME || "root",
  password: process.env.DATABASE_USER_PASSWORD || "root",
  host: process.env.DATABASE_HOST || "localhost",
  dialect: 'mariadb',
  port: process.env.DATABASE_PORT || 3306,
  define: {
    timestamps: true,
    underscored: true
  }
}

let sequelize = new Sequelize(dbConfig)

const Student = require("./Student")(sequelize, Sequelize.DataTypes);
const Course = require("./Course")(sequelize, Sequelize.DataTypes);

const db = {
  Student,
  Course
};

//Run associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Check database & Sequelize connection
const pool = mariadb.createPool(
  {
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.username,
    password: dbConfig.password,
    connectionLimit: 100
  }
)

let conn;
try {
  pool.getConnection()
    .then(connection => {
      connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database};`)
    })
    .then(() => {
      sequelize.sync({ force: false });
      console.log(`Database ${dbConfig.database} connection Ok :D`)
    })
}
catch (error) {
  console.log(error);
}
finally {
  if (conn) conn.release();
}

module.exports = db;
