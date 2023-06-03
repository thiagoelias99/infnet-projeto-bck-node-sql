const Joi = require("joi");

const Curso = require("./Curso")

const Aluno = Joi.object({
    uuid: Joi.string().guid({version: "uuidv4"}),
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    dataNascimento: Joi.date().required(),
    cursos: Joi.array().items(Curso)
});

module.exports = Aluno;