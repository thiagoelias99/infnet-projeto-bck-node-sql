//To group controller functions

const post = require("./post");
const getAll = require("./getAll");
const getByUuid = require("./getByUuid");
const put = require("./put");
const del = require("./del");
const login = require("./login");

module.exports = {
    post,
    getAll,
    getByUuid,
    put,
    del,
    login
};