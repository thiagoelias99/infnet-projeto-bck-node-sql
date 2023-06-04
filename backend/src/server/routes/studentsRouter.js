const express = require("express");
const router = express.Router();

const { Validation } = require("../middlewares");
const { StudentController } = require("../controllers");
const path = "/students"

router.route(path)
    .post(Validation.StudentValidation.post, StudentController.post)
    .get(StudentController.getAll);

router.route(`${path}/:uuid`)
    .all(Validation.ComunValidation.reqParams)
    .get(StudentController.getByUuid)
    .put(Validation.StudentValidation.put, StudentController.put)
    .delete(StudentController.del);
module.exports = router;