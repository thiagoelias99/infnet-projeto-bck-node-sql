const express = require("express");
const router = express.Router();

const { Validation } = require("../middlewares");
const { CourseController } = require("../controllers");
const path = "/courses"

router.route(path)
    .post(Validation.CourseValidation.post, CourseController.post)
    .get(CourseController.getAll);

router.route(`${path}/:uuid`)
    .all(Validation.ComunValidation.reqParams)
    .get(CourseController.getByUuid)
    .put(Validation.CourseValidation.put, CourseController.put)
    .delete(CourseController.del);

router.route(`${path}/:uuid/subscribe`)
    .patch(Validation.ComunValidation.reqParams, CourseController.subscribe);

router.route(`${path}/:uuid/unsubscribe`)
    .patch(Validation.ComunValidation.reqParams, CourseController.unsubscribe);

module.exports = router;