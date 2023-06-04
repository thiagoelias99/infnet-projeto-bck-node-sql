const { StatusCodes } = require("http-status-codes");

const { StudentServices } = require("../../services");

const getAll = async (req, res, next) => {
    try {
        const result = await StudentServices.listAll();

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getAll;