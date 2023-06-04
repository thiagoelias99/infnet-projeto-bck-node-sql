const { StatusCodes } = require("http-status-codes");

const { CursoService } = require("../../services");

const unsubscribe = async (req, res, next) => {
    try {
        await CursoService.unsubscribe(req.params.id, req.params.id);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
};

module.exports = unsubscribe;