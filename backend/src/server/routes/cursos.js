const express = require("express");
const router = express.Router();

const { Validation } = require("../middlewares");
const { CursoController } = require("../controllers");
const path = "/cursos"

router.route(path)
    .post(Validation.CursoValidation.post, CursoController.post)
    .get(CursoController.getAll);

router.route(`${path}/:id`)
    .all(Validation.ComunValidation.reqParams)
    .get(CursoController.getByUuid)
    .put(Validation.CursoValidation.put, CursoController.put)
    .delete(CursoController.del);

router.route(`${path}/:id/subscribe`)
    .patch(Validation.ComunValidation.reqParams, CursoController.subscribe);

router.route(`${path}/:id/unsubscribe`)
    .patch(Validation.ComunValidation.reqParams, CursoController.unsubscribe);

module.exports = router;