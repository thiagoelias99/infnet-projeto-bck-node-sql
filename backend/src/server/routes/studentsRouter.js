const express = require("express");
const router = express.Router();

const { RequestValidator, Authentication } = require("../middlewares");
const path = "/students"
const { StudentController } = require("../controllers")

router.route("/login")
    .post(RequestValidator.body, StudentController.login)

router.route(path)
    .post(RequestValidator.body, StudentController.post)
    .get(StudentController.get);

router.route(`${path}/:uuid`)
    .all(RequestValidator.params)
    .get(Authentication, StudentController.getByUuid)
    .put(RequestValidator.body, StudentController.put)
    .delete(StudentController.del);
module.exports = router;