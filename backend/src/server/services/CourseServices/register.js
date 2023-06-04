const uuid = require("uuid");

const register = async (course) => {
    const courseUuid = uuid.v4();
    console.log(`Curso cadastrado uuid:${courseUuid} dados
    ${course}`)
   
    return courseUuid;
};

module.exports = register;