//Para agrupar middlewares de Validação

const ComunValidation = require("./comun");
const StudentValidation = require("./StudentValidation");
const CursoValidation = require("./curso");

module.exports = {
    ComunValidation,
    StudentValidation,
    CursoValidation
};