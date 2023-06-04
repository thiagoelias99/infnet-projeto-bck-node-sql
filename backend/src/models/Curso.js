const Joi = require("joi");

const Curso = Joi.object({
    uuid: Joi.string().guid({ version: "uuidv4" }),
    descricao: Joi.string().required(),
    professor: Joi.string().required(),
    duracao: Joi.number().integer().required(),
    inscritos: Joi.number().integer().default(0),
    alunos: Joi.array().items(Joi.object({
        uuidAluno: Joi.string().guid({ version: "uuidv4" }),
        nomeAluno: Joi.string()
    })).default([])
});

module.exports = Curso;