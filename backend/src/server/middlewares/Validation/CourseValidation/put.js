const { Course } = require("../../../../models");

const put = (req, res, next) => {
    const { error } = Course.validate(req.body);
    if (error) {
        console.log(error);
        next(error);
    }
    next();
};

module.exports = put;