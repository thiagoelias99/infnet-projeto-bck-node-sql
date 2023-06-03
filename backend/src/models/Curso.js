const Joi = require("joi");

const Aluno = require("./Aluno")

const Curso = Joi.object({
    uuid: Joi.string().guid({version: "uuidv4"}),
    descricao: Joi.string().required(),
    professor: Joi.string().required(),
    duracao: Joi.number().integer().required(),
    alunos: Joi.array().items(Aluno)
});

module.exports = Curso;