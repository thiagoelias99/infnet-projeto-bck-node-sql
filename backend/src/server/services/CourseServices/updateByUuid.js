const updateByUuid = async (uuid, course) => {
    console.log(`Curso uuid: ${uuid} atualizado:
    ${course}`)
    return true
};

module.exports = updateByUuid;