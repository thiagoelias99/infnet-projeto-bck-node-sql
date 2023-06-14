const { StatusCodes } = require("http-status-codes");

const { StudentServices } = require("../../services");

const getByUuid = async (req, res, next) => {
    try {
        const result = await StudentServices.selectByUuid(req.params.uuid);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getByUuid;