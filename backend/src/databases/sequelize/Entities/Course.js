const { DataTypes } = require('sequelize');

const connection = require("../connection")

const Course = connection.define("Courses", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseHours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    finishDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Course;