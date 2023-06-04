const Joi = require("joi");

const Curso = require("./Curso")

const Student = Joi.object({
    uuid: Joi.string().guid({version: "uuidv4"}),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthDate: Joi.date().required(),
    courses: Joi.array().items(Curso).default([])
});

module.exports = Student;