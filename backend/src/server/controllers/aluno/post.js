const { StatusCodes } = require("http-status-codes");

const { AlunoService } = require("../../services");

const post = async (req, res, next) => {
    try {
        const result = await AlunoService.cadastrar(req.body);
        res.status(StatusCodes.OK).json({ id: result });
    } catch (error) {
        next(error);
    }
};

module.exports = post;