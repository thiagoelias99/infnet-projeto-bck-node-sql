//Para agrupar middlewares de Validação

const body = require("./body")
const params = require("./params")

module.exports = {
    body,
    params
};