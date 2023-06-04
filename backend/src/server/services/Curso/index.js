//Para agrupar funções relacionadas ao Empregado

const cadastrar = require("./cadastrar");
const listarTodos = require("./listarTodos");
const deletar = require("./deletar");
const atualizar = require("./atualizar");
const retornarPorUUid = require("./retornarPorUUid");
const subscribe = require("./subscribe");
const unsubscribe = require("./unsubscribe");

module.exports = {
    cadastrar,
    listarTodos,
    deletar,
    atualizar,
    retornarPorUUid,
    subscribe,
    unsubscribe
};
