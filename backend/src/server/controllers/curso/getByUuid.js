const { StatusCodes } = require("http-status-codes");

const { CursoService } = require("../../services");

const getByUuid = async (req, res, next) => {
    try {
        const result = await CursoService.retornarPorUUid(req.params.id);

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getByUuid;