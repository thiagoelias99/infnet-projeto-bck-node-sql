const { JWTServices } = require("../../services");
const { JWTError } = require("../../../errors")

const authentication = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new JWTError("Authorization not found in request header")
    }

    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
        throw new JWTError("Invalid Token")
    }

    req.headers.userEmail = JWTServices.verify(token);

    return next();
};

module.exports = {
    authentication
}