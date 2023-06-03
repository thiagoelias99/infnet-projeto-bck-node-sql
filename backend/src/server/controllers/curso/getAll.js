const { StatusCodes } = require("http-status-codes");

const { CursoService } = require("../../services");

const getAll = async (req, res, next) => {
    try {
        const result = await CursoService.listarTodos(req.body);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getAll;