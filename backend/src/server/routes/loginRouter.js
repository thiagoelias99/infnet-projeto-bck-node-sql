const express = require("express");
const router = express.Router();

const { RequestValidator } = require("../middlewares");
const { StudentController } = require("../controllers");
const StudentController2 = require("../controllers/StudentController2")

const path = "/login"

router.route(path)
    .post(RequestValidator.body, StudentController2.login)

module.exports = router;