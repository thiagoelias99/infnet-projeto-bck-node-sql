const { StatusCodes } = require("http-status-codes");

const { StudentServices } = require("../../services");

const put = async (req, res, next) => {
    try {
        await StudentServices.updateByUuid(req.params.uuid, req.body);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = put;