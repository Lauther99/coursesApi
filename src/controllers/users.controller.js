const UserServices = require('../services/users.services')


const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getUserById(id);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    };
};

const getUserCourses = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getUserCourseById(id);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        const info = req.body;
        const result = await UserServices.newUser(info);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const newInfo = req.body;
        const result = await UserServices.upUser(id, newInfo);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const addCourse = async (req, res) => {
    try {
        const info = req.body;
        const result = await UserServices.addCourse(info);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    getUser,
    getUserCourses,
    createUser,
    updateUser,
    addCourse
};