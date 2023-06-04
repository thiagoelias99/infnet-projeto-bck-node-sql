const { Student } = require("../../../../models");

const post = (req, res, next) => {
    const { error } = Student.validate(req.body);
    if (error) {
        console.log(error);
        next(error);
    }
    next();
};

module.exports = post;