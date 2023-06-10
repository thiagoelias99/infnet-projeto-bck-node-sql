const Student = require("./Entities/Student");
const Course = require("./Entities/Course")

Student.belongsToMany(Course, {through: "Students_Courses"});
Course.belongsToMany(Student, {through: "Students_Courses"});
// Student.belongsToMany(Course);
// Course.belongsToMany(Student);

Student.sync({force: false})
Course.sync({force: false})

console.log(await Student.findAll())