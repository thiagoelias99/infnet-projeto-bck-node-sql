//To group Course related functions

const register = require("./register");
const listAll = require("./listAll");
const remove = require("./remove");
const updateByUuid = require("./updateByUuid");
const selectByUuid = require("./selectByUuid");
const subscribeStudent = require("./subscribeStudent");
const unsubscribeStudent = require("./unsubscribeStudent");

module.exports = {
    register,
    listAll,
    remove,
    updateByUuid,
    selectByUuid,
    subscribeStudent,
    unsubscribeStudent
};
