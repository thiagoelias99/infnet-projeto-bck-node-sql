const { StatusCodes } = require("http-status-codes");

const { CourseServices } = require("../../services");

const unsubscribe = async (req, res, next) => {
    try {
        await CourseServices.unsubscribeStudent(req.params.uuid, req.params.uuid);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = unsubscribe;