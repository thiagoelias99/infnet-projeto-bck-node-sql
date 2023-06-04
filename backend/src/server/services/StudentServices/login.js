const { JWTService } = require("../JWTServices")

const login = async (email, password) => {
    const jwt = JWTService.sign(email)
    console.log(jwt)
    const decodedData = JWTService.verify(jwt)
    console.log(decodedData)

    return (
        {
            jwt,
            decodedData
        }
    );
};

module.exports = login;