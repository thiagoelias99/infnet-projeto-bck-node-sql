//To group middlewares

const RequestValidator = require("./RequestValidator");
const errorHandler = require("./ErrorHandler");

module.exports = {
    RequestValidator,
    errorHandler
};