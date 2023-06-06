const { sign } = require("../JWTServices")
const { CryptServices } = require("../CryptServices")
const { LoginError } = require("../../../errors")

const login = async (email, password) => {
    try {
        const student = {
            password: "123456",
            uuid: "1e2b3159-e6cc-4a60-b82b-c80529f4906d"
        };

        // if(CryptServices.verifyPassword(password, student.password)) throw new LoginError();
        if (password != student.password) throw new LoginError();

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