//Para agrupar middlewares de Validação

const ComunValidation = require("./comun");
const StudentValidation = require("./StudentValidation");
const CourseValidation = require("./CourseValidation");

module.exports = {
    ComunValidation,
    StudentValidation,
    CourseValidation
};