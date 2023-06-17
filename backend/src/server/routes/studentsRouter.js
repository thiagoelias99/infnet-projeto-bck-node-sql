const express = require("express");
const router = express.Router();

const { RequestValidator, Authentication, AdminAuthentication } = require("../middlewares");
const path = "/students"
const { StudentController } = require("../controllers")

router.route("/login")
    .post(RequestValidator.body, StudentController.login)

router.route(path)
    .post(RequestValidator.body, StudentController.post)
    .get(StudentController.get);

router.route(`${path}/:uuid`)
    .all(RequestValidator.params, Authentication)
    .get(StudentController.getByUuid)
    .put(AdminAuthentication, RequestValidator.body, StudentController.put)
    .delete(AdminAuthentication, StudentController.del);
module.exports = router;