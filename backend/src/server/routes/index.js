const express = require("express");
const router = express.Router();

const StudentsRouter = require("./studentsRouter")
const CoursesRouter = require("./coursesRouter")
const Route404 = require("./404")
const WelcomeRoute = require("./welcome")
// const LoginRouter = require("./loginRouter")

router.use(WelcomeRoute);
// router.use(LoginRouter);
router.use(StudentsRouter);
router.use(CoursesRouter);

router.use(Route404);

module.exports = router;