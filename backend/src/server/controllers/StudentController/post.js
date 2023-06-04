const { StatusCodes } = require("http-status-codes");

const { StudentServices } = require("../../services");

const post = async (req, res, next) => {
    try {
        const result = await StudentServices.register(req.body);
        res.status(StatusCodes.OK).json({ uuid: result });
    } catch (error) {
        next(error);
    }
};

module.exports = post;