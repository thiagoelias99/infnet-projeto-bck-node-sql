const express = require("express");
const router = express.Router();

const AlunosRoutes = require("./alunos")
const CursosRoutes = require("./cursos")
const Route404 = require("./404")
const WelcomeRoute = require("./welcome")

router.use(WelcomeRoute);
router.use(AlunosRoutes);
router.use(CursosRoutes);
router.use(Route404);

module.exports = router;