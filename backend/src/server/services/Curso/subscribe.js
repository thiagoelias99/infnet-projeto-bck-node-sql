const subscribe = async (uuidCourse, uuidStudent) => {
    console.log(`Aluno ${uuidStudent} inscrito no curso ${uuidCourse}`)
    return true
};

module.exports = subscribe;