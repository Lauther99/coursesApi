const CourseServices = require('../services/courses.services')

const getAllCourses = async (req, res) => {
    try {
        const result = await CourseServices.getAll();
        res.json(result)
    } catch (error) {
        res.status(404).json(error.message);
    };
};

const getAllInfo = async (req, res) => {
    try {
        const result = await CourseServices.getAllInfo();
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    };
};

const createCourse = async (req, res) => {
    try {
        const info = req.body;
        const result = await CourseServices.newCourse(info);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    };
};

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const info = req.body;
        const result = await CourseServices.editCourse(id, info);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    getAllCourses,
    getAllInfo,
    createCourse,
    updateCourse,
};