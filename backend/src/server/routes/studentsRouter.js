const express = require("express");
const router = express.Router();

const { RequestValidator, Authentication } = require("../middlewares");
const { StudentController } = require("../controllers");
const path = "/students"

router.route(path)
    .post(RequestValidator.body, StudentController.post)
    .get(Authentication, StudentController.getAll);

router.route(`${path}/:uuid`)
    .all(RequestValidator.params, Authentication)
    .get(StudentController.getByUuid)
    .put(RequestValidator.body, StudentController.put)
    .delete(StudentController.del);
module.exports = router;