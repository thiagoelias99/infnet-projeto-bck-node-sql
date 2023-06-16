const moment = require('moment')

const { Student, Course } = require('../../../databases/sequelize/models')
const BaseDAO = require('./BaseDAO')

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
        const course = await Course.findByPk(uuid, {
            include: [
                {
                    model: Student,
                    through: { attributes: [] }
                }
            ],
        })
        course.setDataValue("numberOfSubscribers", course.Students.length)
        course.setDataValue("courseStatus", this.getCourseStatus(course))

        return course
    }

    async getAllRegisters(where = {}) {
        const courses = await Course.findAll(
            {
                where: { ...where },
                include: [
                    {
                        model: Student,
                        attributes: ["uuid", "name"],
                        through: { attributes: [] }
                    }
                ],
            })
        courses.forEach(course => {
            course.setDataValue("numberOfSubscribers", course.Students.length)
            course.setDataValue("courseStatus", this.getCourseStatus(course))
        });

        return courses
    }

    getCourseStatus(course) {
        const today = moment()
        const startDate = moment(course.startDate)
        const finishDate = moment(course.finishDate)

        if (today.isBefore(startDate)) return "Open"
        if (today.isAfter(finishDate)) return "Finished"
        return "Started"
    }
}

module.exports = CourseDAO