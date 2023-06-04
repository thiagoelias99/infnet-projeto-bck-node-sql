//Para agrupar services

const StudentServices = require("./StudentServices");
const CourseServices = require("./CourseServices");
const CryptServices = require("./CryptServices");
const JWTServices = require("./JWTServices");

module.exports = {
    StudentServices,
    CourseServices,
    CryptServices,
    JWTServices
};