const BaseDAO = require('./BaseDAO')
const { Student, Course } = require('../../../databases/sequelize/models')
const { CryptServices } = require("../CryptServices")
const { sign } = require("../JWTServices")
const { LoginError } = require("../../../errors")

class StudentDAO extends BaseDAO {
    constructor() {
        super('Student')
    }

    async createRegister(student) {
        student.password = await CryptServices.hashPassword(student.password);
        return Student.create(student)
    }

    async getRegisterByUuid(uuid) {
        return Student.findByPk(uuid, {
            include: [
                {
                    model: Course,
                    through: {attributes: []}
                }
            ],
        })
    }

    async login(email, password) {
        try {
            const student = await Student.scope("withPassword").findOne({ where: { email } })

            if (!student) throw new LoginError();
            if (!await CryptServices.verifyPassword(password, student.password)) throw new LoginError();

            const jwt = sign(student.uuid)
            return (
                {
                    message: "Login successfully done! Please use the following token in header requests for authentication.",
                    tokenType: "Bearer",
                    jwt
                }
            );

        } catch (error) {
            throw error
        };
    };
};

module.exports = StudentDAO