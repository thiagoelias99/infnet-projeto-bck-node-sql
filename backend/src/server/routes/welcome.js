const express = require("express");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        mensagem: "Olá, esta API foi desenvolvida por Thiago Elias para o projeto do curso Back-end com NodeJS & SQL da Infnet",
        message: "Hello! This API was developed by Thiago Elias for the project of the Back-end with NodeJS & SQL course at Infnet."
    });
});

module.exports = router;