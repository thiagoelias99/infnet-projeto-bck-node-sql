const { StatusCodes } = require("http-status-codes");
const StudentDAO = require("../services/DatabaseServices/StudentDAO")

const studentDAO = new StudentDAO();

class StudentController {
    static async post(req, res, next) {
        try {
            const student = await studentDAO.createRegister(req.body);
            res.status(StatusCodes.OK).json({ uuid: student.uuid });
        } catch (error) {
            next(error);
        }
    };

    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const message = await studentDAO.login(email, password);

            res.status(StatusCodes.OK).json(message);
        } catch (error) {
            next(error);
        }
    };

    static async get(req, res, next) {
        try {
            const students = await studentDAO.getAllRegisters();
            res.status(StatusCodes.OK).json(students);
        } catch (error) {
            next(error);
        }
    };

    static async getByUuid(req, res, next) {
        try {
            const student = await studentDAO.getRegisterByUuid(req.params.uuid);
            res.status(StatusCodes.OK).json(student);
        } catch (error) {
            next(error);
        }
    };

    static async del(req, res, next) {
        try {
            await studentDAO.deleteRegister(req.params.uuid);
            res.status(StatusCodes.NO_CONTENT).send();
        } catch (error) {
            next(error);
        }
    };

    static async put(req, res, next) {
        try {
            await studentDAO.updateRegister(req.body, req.params.uuid);
            res.status(StatusCodes.NO_CONTENT).send();
        } catch (error) {
            next(error);
        }
    };
};

module.exports = StudentController;