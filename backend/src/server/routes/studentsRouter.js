const express = require("express");
const router = express.Router();

const { RequestValidator } = require("../middlewares");
const { StudentController } = require("../controllers");
const path = "/students"

router.route(path)
    .post(RequestValidator.body, StudentController.post)
    .get(StudentController.getAll);

router.route(`${path}/:uuid`)
    .all(RequestValidator.params)
    .get(StudentController.getByUuid)
    .put(RequestValidator.body, StudentController.put)
    .delete(StudentController.del);
module.exports = router;