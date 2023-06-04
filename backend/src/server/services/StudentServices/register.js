const uuid = require("uuid");
const { CryptServices } = require("../CryptServices")

const register = async (student) => {
    const studentUuid = uuid.v4();
    student.password = await CryptServices.hashPassword(student.password)
    console.log(`Aluno cadastrado uuid:${studentUuid}`)
    console.log(student);

    return studentUuid;
};

module.exports = register;