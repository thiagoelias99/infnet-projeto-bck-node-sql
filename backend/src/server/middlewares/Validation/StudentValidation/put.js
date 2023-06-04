const { Student } = require("../../../../models");

const put = (req, res, next) => {
    const { error } = Student.validate(req.body);
    if (error) {
        console.log(error);
        next(error);
    }
    next();
};

module.exports = put;