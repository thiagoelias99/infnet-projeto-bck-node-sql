const database = require("../../../databases/sequelize/models")

class BaseDAO {
  constructor(modelName) {
    this.modelName = modelName
  }

  async getAllRegisters(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } })
  }

  async getOneRegister(where = {}) {
    return database[this.modelName].findOne({ where: { ...where } })
  }

  async getRegisterByUuid(uuid) {
    return database[this.modelName].findByPk(uuid)
  }

  async createRegister(data) {
    return database[this.modelName].create(data)
  }

  async updateRegister(data, uuid, transaction = {}) {
    return database[this.modelName]
      .update(data, { where: { uuid } }, transaction)
  }

  async deleteRegister(uuid) {
    return database[this.modelName].destroy({ where: { uuid } })
  }
};

module.exports = BaseDAO