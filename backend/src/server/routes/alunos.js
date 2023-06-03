const express = require("express");
const router = express.Router();

const { Validation } = require("../middlewares");
const { AlunoController } = require("../controllers");
const path = "/alunos"

router.route(path)
    .post(Validation.AlunoValidation.post, AlunoController.post)
    .get(AlunoController.getAll);

router.route(`${path}/:id`)
    .all(Validation.ComunValidation.reqParams)
    .get(AlunoController.getByUuid)
    .put(Validation.AlunoValidation.put, AlunoController.put)
    .delete(AlunoController.del);
module.exports = router;