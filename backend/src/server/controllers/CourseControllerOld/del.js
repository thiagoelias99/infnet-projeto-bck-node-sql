const { StatusCodes } = require("http-status-codes");

const { CourseServices } = require("../../services");

const del = async (req, res, next) => {
    try {
        await CourseServices.remove(req.params.uuid);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = del;