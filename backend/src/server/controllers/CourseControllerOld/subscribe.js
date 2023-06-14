const { StatusCodes } = require("http-status-codes");

const { CourseServices } = require("../../services");

const subscribe = async (req, res, next) => {
    try {
        await CourseServices.subscribeStudent(req.params.uuid, req.params.uuid);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = subscribe;