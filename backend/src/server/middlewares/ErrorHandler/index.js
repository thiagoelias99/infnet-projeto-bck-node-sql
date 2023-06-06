const { StatusCodes } = require("http-status-codes");

const Joi = require("joi");
const {
    EmailError,
    IdError,
    JWTError,
    LoginError
} = require("../../../errors");

const errorHandler = (err, req, res, next) => {
    console.log("Error Handler");
    console.log(err);
    
    if (err instanceof Joi.ValidationError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.details[0].message }); return; }

    if (err instanceof EmailError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.message }); return; }
    
    if (err instanceof IdError) { res.status(StatusCodes.BAD_REQUEST).json({ message: err.message }); return; }
    
    if (err instanceof JWTError) { res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message }); return; }

    if (err instanceof LoginError) { 
        console.log("asdasdsa")
        res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message }); return; }

    console.log("Servidor rodando...");
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
};

module.exports = errorHandler;