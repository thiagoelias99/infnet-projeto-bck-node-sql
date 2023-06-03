//Para agrupar funções do controller

const post = require("./post");
const getAll = require("./getAll");
const getByUuid = require("./getByUuid");
const del = require("./del");
const put = require("./put");

module.exports = {
    post,
    getAll,
    getByUuid,
    del,
    put
};