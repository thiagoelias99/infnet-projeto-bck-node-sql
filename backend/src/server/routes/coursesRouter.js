const express = require("express");
const router = express.Router();

const { RequestValidator } = require("../middlewares");
const { CourseController } = require("../controllers");
const path = "/courses"

router.route(path)
    .post(RequestValidator.body, CourseController.post)
    .get(CourseController.getAll);

router.route(`${path}/:uuid`)
    .all(RequestValidator.params)
    .get(CourseController.getByUuid)
    .put(RequestValidator.body, CourseController.put)
    .delete(CourseController.del);

router.route(`${path}/:uuid/subscribe`)
    .patch(RequestValidator.params, CourseController.subscribe);

router.route(`${path}/:uuid/unsubscribe`)
    .patch(RequestValidator.params, CourseController.unsubscribe);

module.exports = router;