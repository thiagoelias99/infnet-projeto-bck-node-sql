const express = require("express");
const router = express.Router();

const { RequestValidator } = require("../middlewares");
const { StudentController } = require("../controllers");
const path = "/login"

router.route(path)
    .post(RequestValidator.body, StudentController.login)

module.exports = router;