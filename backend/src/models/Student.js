const Joi = require("joi");

const Course = require("./Course")

const Student = Joi.object({
    uuid: Joi.string().guid({version: "uuidv4"}),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthDate: Joi.date().required(),
    courses: Joi.array().items().default([])
});

module.exports = Student;