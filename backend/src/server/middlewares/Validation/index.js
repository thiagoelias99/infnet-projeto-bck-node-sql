//Para agrupar middlewares de Validação

const ComunValidation = require("./comun");
const AlunoValidation = require("./aluno");
const CursoValidation = require("./curso");

module.exports = {
    ComunValidation,
    AlunoValidation,
    CursoValidation
};