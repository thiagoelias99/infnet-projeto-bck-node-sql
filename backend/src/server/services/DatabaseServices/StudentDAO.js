const { ValidationError } = require('sequelize');

const { Student, Course } = require('../../../databases/sequelize/models')
const { CryptServices } = require("../CryptServices")
const { LoginError } = require("../../../errors")
const { sign } = require("../JWTServices")
const BaseDAO = require('./BaseDAO');
const { EmailError } = require('../../../errors')

class StudentDAO extends BaseDAO {
    constructor() {
        super('Student')
    }

    async createRegister(student) {
        try {
            student.password = await CryptServices.hashPassword(student.password);
            const studentDb = await Student.create(student)
            return studentDb
        } catch (error) {
            if (error instanceof ValidationError) {
                throw new EmailError()
            } else {
                throw error
            }
        }

    }

    async getRegisterByUuid(uuid) {
        return Student.findByPk(uuid, {
            include: [
                {
                    model: Course,
                    through: { attributes: [] }
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