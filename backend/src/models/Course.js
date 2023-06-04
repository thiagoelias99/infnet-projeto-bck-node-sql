const Joi = require("joi");

const Student = require("./Course")

const Course = Joi.object({
    uuid: Joi.string().guid({ version: "uuidv4" }),
    description: Joi.string().required(),
    teacher: Joi.string().required(),
    length: Joi.number().integer().required(),
    subscribersNumber: Joi.number().integer().default(0),
    students: Joi.array().items().default([])
});

module.exports = Course;