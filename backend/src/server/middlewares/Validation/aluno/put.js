const { Aluno } = require("../../../../models");

const cadastro = (req, res, next) => {
    const { error } = Aluno.validate(req.body);
    if (error) {
        console.log(error);
        next(error);
    }
    next();
};

module.exports = cadastro;