const Joi = require("joi");

const Curso = Joi.object({
    uuid: Joi.string().guid({ version: "uuidv4" }),
    descricao: Joi.string().required(),
    professor: Joi.string().required(),
    duracao: Joi.number().integer().required(),
    alunos: Joi.array().items(Joi.object({
        uuidAluno: Joi.string().guid({ version: "uuidv4" }),
        nomeAluno: Joi.string()
    }))
});

module.exports = Curso;