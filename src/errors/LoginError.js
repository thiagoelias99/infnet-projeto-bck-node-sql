class LoginError extends Error {
    constructor(message = "Invalid email or password") {
        super(message);
    }
}

module.exports = LoginError;