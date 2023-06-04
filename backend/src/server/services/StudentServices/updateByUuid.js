const updateByUuid = async (uuid, student) => {
    console.log(`student uuid: ${uuid} atualizado:
    ${student}`)
    return true
};

module.exports = updateByUuid;