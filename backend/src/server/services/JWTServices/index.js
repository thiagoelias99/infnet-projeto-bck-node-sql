const jwt = require("jsonwebtoken");

const { JWTError } = require("../../../errors")

const sign = (data) => {
    if (!process.env.JWT_SECRET) throw new JWTError("JWT_SECRET not found in .env");
    if (!process.env.JWT_EXPIRATION) throw new JWTError("JWT_EXPIRATION not found in .env");
    console.log(process.env.JWT_EXPIRATION)
    return jwt.sign(data, process.env.JWT_SECRET);
};

const verify = (token) => {
    if (!process.env.JWT_SECRET) throw new JWTError("JWT_SECRET not found in .env");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decodedData !== "string") {
        throw new JWTError("Invalid Token")
    }
    return decodedData;
};

module.exports.JWTService = {
    sign,
    verify,
};