const express = require("express");
const router = express.Router();

const { RequestValidator, Authentication } = require("../middlewares");
const path = "/students"
const StudentController2 = require("../controllers/StudentController2")

router.route("/login")
    .post(RequestValidator.body, StudentController2.login)

router.route(path)
    .post(RequestValidator.body, StudentController2.post)
    .get(Authentication, StudentController2.get);

router.route(`${path}/:uuid`)
    .all(RequestValidator.params, Authentication)
    .get(StudentController2.getByUuid)
    .put(RequestValidator.body, StudentController2.put)
    .delete(StudentController2.del);
module.exports = router;