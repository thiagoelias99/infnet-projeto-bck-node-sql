const unsubscribeStudent = async (uuidCourse, uuidStudent) => {
    console.log(`Aluno ${uuidStudent} removido do curso ${uuidCourse}`)
    return true
};

module.exports = unsubscribeStudent;