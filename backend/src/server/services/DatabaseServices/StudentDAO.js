const BaseDAO = require('./BaseDAO')
const database = require('../../../databases/sequelize/models')
const { CryptServices } = require("../CryptServices")
const { sign } = require("../JWTServices")
const { LoginError } = require("../../../errors")

class StudentDAO extends BaseDAO {
    constructor() {
        super('Student')
        //   this.matriculas = new Services('Matriculas')
    }
    async createRegister(student) {
        student.password = await CryptServices.hashPassword(student.password);
        return database[this.modelName].create(student)
    }

    async getRegisterByUuid(uuid) {
        return database[this.modelName].findByPk(uuid)
      }

    async login(email, password) {
        try {
            const student = await database[this.modelName].findOne({ where: { email } })

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
        }
    };

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

module.exports = StudentDAO