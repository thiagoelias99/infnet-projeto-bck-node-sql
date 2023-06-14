const uuid = require("uuid");
const { CryptServices } = require("../CryptServices")
const database = require("../../../databases/sequelize/models")

const register = async (student) => {
    const studentUuid = uuid.v4();
    student.uuid = studentUuid;
    student.password = await CryptServices.hashPassword(student.password);

    await database.Student.create(student);
    return studentUuid;
};

module.exports = register;