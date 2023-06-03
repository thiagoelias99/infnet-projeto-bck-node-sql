const retornarPorUUid = async () => {
    return ([
        {
            uuid: "564s6ad5",
            nome: "Aluno 1",
            email: "aluno1@email.com",
            dataNascimento: "1989-05-09T03:00:00.000Z",
            cursos: [
                {
                    descricao: "Curso 1",
                    duracao: 10
                },
                {
                    descricao: "Curso 2",
                    duracao: 12
                }
            ]
        },
    ])
};

module.exports = retornarPorUUid;