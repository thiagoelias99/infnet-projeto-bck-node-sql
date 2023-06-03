const express = require("express");
const router = express.Router();

const AlunosRoutes = require("./alunos")
const Route404 = require("./404")
const WelcomeRoute = require("./welcome")

router.use(WelcomeRoute)
router.use(AlunosRoutes);
// router.use(EmpregadosRoutes);
// router.use(DepartamentosRoutes);
router.use(Route404);

module.exports = router;