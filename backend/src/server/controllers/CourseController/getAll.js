const { StatusCodes } = require("http-status-codes");

const { CourseServices } = require("../../services");

const getAll = async (req, res, next) => {
    try {
        const result = await CourseServices.listAll();

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getAll;