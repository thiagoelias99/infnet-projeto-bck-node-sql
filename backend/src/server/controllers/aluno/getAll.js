const { StatusCodes } = require("http-status-codes");

const { AlunoService } = require("../../services");

const getAll = async (req, res, next) => {
    try {
        const result = await AlunoService.listarTodos(req.body);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getAll;