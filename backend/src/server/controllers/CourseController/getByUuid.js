const { StatusCodes } = require("http-status-codes");

const { CourseServices } = require("../../services");

const getByUuid = async (req, res, next) => {
    try {
        const result = await CourseServices.selectByUuid(req.params.uuid);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getByUuid;