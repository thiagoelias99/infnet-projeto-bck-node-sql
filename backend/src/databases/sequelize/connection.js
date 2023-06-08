const { Sequelize } = require('sequelize')
const mariadb = require('mariadb');
const dotenv = require("dotenv");

dotenv.config()

const dbConfig = {
    database: process.env.DATABASE_NAME || "infnet",
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_USER_PASSWORD || "root",
    host: process.env.DATABASE_HOST || "localhost",
    dialect: 'mariadb',
    port: process.env.DATABASE_PORT || 3306,
    define: {
        timestamps: true,
        underscored: true
    }
};

const sequelize = new Sequelize(dbConfig)

checkConnection();



async function checkConnection() {
    try {
        await createDatabase()
        sequelize.authenticate()
        console.log('Database connection successfully done')
    }
    catch (err) {
        console.log('Database connection error')
    }
}

async function createDatabase() {
    const pool = mariadb.createPool({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.username,
        password: dbConfig.password,
        connectionLimit: 100
    })
    let conn;
    try {
        conn = await pool.getConnection();
        result = await conn.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database};`);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        if (conn) conn.release();
    }
}


module.exports = sequelize