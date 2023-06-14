const BaseDAO = require('./BaseDAO')
const database = require('../../../databases/sequelize/models')
const StudentDAO = require('./StudentDAO')
// const { CryptServices } = require("../CryptServices")
// const { sign } = require("../JWTServices")

class CourseDAO extends BaseDAO {
    constructor() {
        super('Course')
        //   this.matriculas = new Services('Matriculas')
    }

    async subscribeStudent(studentUuid, courseUuid) {
        const studentDAO = new StudentDAO()
        const student = await studentDAO.getRegisterByUuid(studentUuid)
        const course = await this.getRegisterByUuid(courseUuid)

        if (student && course) {
            course.addStudent(student)
        } else {
            throw new Error("Can't add student to the course")
        }
    }
    // async createRegister(student) {
    //     student.password = await CryptServices.hashPassword(student.password);
    //     return database[this.modelName].create(student)
    // }

    // async login(email, password) {
    //     try {
    //         const student = await database[this.modelName].findOne({ where: { email } })

    //         if (!student) throw new LoginError();
    //         if (!await CryptServices.verifyPassword(password, student.password)) throw new LoginError();

    //         const jwt = sign(student.uuid)
    //         return (
    //             {
    //                 message: "Login successfully done! Please use the following token in header requests for authentication.",
    //                 tokenType: "Bearer",
    //                 jwt
    //             }
    //         );

    //     } catch (error) {
    //         throw error
    //     }
    // };

    // async pegaRegistrosAtivos(where = {}){
    //   return database[this.nomeDoModelo].findAll({ where: { ...where } })
    // }

    // async pegaTodosOsRegistros(where = {}){
    //   return database[this.nomeDoModelo]
    //     .scope('todos')
    //     .findAll({ where: { ...where } })
    // }

    // async cancelaPessoaEMatriculas(estudanteId){
    //   return database.sequelize.transaction(async transacao => { 
    //     await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao })
    //     await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao })
    //   })
    // }

    // async pegaMatriculasPorEstudante(where = {}) {
    //   const matriculas = await database[this.nomeDoModelo]
    //     .findOne({ where: { ...where } })
    //   return matriculas.getAulasMatriculadas()
    // }
}

module.exports = CourseDAO