const BaseDAO = require('./BaseDAO')
const { Student, Course } = require('../../../databases/sequelize/models')
const StudentDAO = require('./StudentDAO')

class CourseDAO extends BaseDAO {
    constructor() {
        super('Course')
    }

    async subscribeStudent(studentUuid, courseUuid) {
        const student = await Student.findByPk(studentUuid)
        const course = await Course.findByPk(courseUuid)

        if (student && course) {
            course.addStudent(student)
        } else {
            throw new Error("Can't add student to the course")
        }
    }

    async unsubscribeStudent(studentUuid, courseUuid) {
        const student = await Student.findByPk(studentUuid)
        const course = await Course.findByPk(courseUuid)

        if (student && course) {
            course.removeStudent(student)
        } else {
            throw new Error("Can't remove student from the course")
        }
    }

    async getRegisterByUuid(uuid) {
        return Course.findByPk(uuid, {
            include: [
                {
                    model: Student,
                    through: { attributes: [] }
                }
            ],
        })
    }
}

module.exports = CourseDAO