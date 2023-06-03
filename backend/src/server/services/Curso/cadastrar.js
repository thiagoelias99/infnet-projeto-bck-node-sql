const uuid = require("uuid");

const cadastrar = async (curso) => {
    const id = uuid.v4();
    console.log(`Curso cadastrado uuid:${id} dados
    ${curso}`)
   
    return id;
};

module.exports = cadastrar;