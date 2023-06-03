const uuid = require("uuid");

const cadastrar = async (aluno) => {
    const id = uuid.v4();
    console.log(`Aluno cadastrado uuid:${id} dados
    ${aluno}`)
   
    return id;
};

module.exports = cadastrar;