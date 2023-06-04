const { StatusCodes } = require("http-status-codes");

const { StudentServices } = require("../../services");

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const result = await StudentServices.login(email, password);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = login;