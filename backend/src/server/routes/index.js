const express = require("express");
const router = express.Router();

const StudentsRouter = require("./studentsRouter")
const CursosRoutes = require("./cursos")
const Route404 = require("./404")
const WelcomeRoute = require("./welcome")

router.use(WelcomeRoute);
router.use(StudentsRouter);
router.use(CursosRoutes);
router.use(Route404);

module.exports = router;