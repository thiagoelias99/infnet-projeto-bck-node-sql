const { StatusCodes } = require("http-status-codes");

const { AlunoService } = require("../../services");

const put = async (req, res, next) => {
    try {
        await AlunoService.atualizar(req.params.id, req.body);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = put;