const { sign } = require("../JWTServices")
const { CryptServices } = require("../CryptServices")
const { LoginError } = require("../../../errors")
const database = require("../../../databases/sequelize/models")

const login = async (email, password) => {
    try {
        const student = await database.Student.findOne({ where: { email } })

        // console.log(student)
        if (!student) throw new LoginError();
        console.log('aqui')

        console.log(await CryptServices.verifyPassword(password, student.password))
        if (!await CryptServices.verifyPassword(password, student.password)) throw new LoginError();
        console.log('aqui2')
        const jwt = sign(student.uuid)

        return (
            {
                message: "Login successfully done! Please use the following token in header requests for authentication.",
                tokenType: "Bearer",
                jwt
            }
        );

    } catch (error) {
        throw error
    }
};

module.exports = login;