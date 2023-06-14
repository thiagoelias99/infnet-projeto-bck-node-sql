const { StatusCodes } = require("http-status-codes");
const StudentDAO = require("../../services/DatabaseServices/StudentDAO")

const studentDAO = new StudentDAO();

const post = async (req, res, next) => {
    try {
        const student = await studentDAO.createRegister(req.body);
        res.status(StatusCodes.OK).json({ uuid: student.uuid });
    } catch (error) {
        next(error);
    }
};

module.exports = post;