const { sign } = require("../JWTServices")

const login = async (email, password) => {
    const jwt = sign(email)

    return (
        {
            jwt,
        }
    );
};

module.exports = login;