const { StatusCodes } = require("http-status-codes");

const { StudentServices } = require("../../services");

const deleteByUuid = async (req, res, next) => {
    try {
        await StudentServices.remove(req.params.uuid);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = deleteByUuid;