const selectByUuid = async (uuid) => {
    return (
        {
            uuid: "sfdgsfd",
            descricao: "Curso 2",
            professor: "Bia",
            duracao: 12,
            alunos: [
                {
                    uuid: "asdasdasdas",
                    nome: "Zé"
                },
                {
                    uuid: "dasjdhaskd",
                    nome: "Ana"
                }
            ]
        }
    )
};

module.exports = selectByUuid;