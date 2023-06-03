//Para agrupar funções relacionadas ao Empregado

const cadastrar = require("./cadastrar");
const listarTodos = require("./listarTodos");
const deletar = require("./deletar");
const atualizar = require("./atualizar");
const retornarPorUUid = require("./retornarPorUUid");

module.exports = {
    cadastrar,
    listarTodos,
    deletar,
    atualizar,
    retornarPorUUid
};
