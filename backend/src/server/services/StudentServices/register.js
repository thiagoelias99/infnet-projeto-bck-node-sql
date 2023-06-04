const uuid = require("uuid");

const register = async (student) => {
    const studentUuid = uuid.v4();
    console.log(`Aluno cadastrado uuid:${studentUuid} dados
    ${student}`)
   
    return studentUuid;
};

module.exports = register;