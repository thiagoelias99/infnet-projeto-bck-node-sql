const { StatusCodes } = require("http-status-codes");

const { CourseServices } = require("../../services");

const post = async (req, res, next) => {
    try {
        const result = await CourseServices.register(req.body);
        res.status(StatusCodes.OK).json({ id: result });
    } catch (error) {
        next(error);
    }
};

module.exports = post;