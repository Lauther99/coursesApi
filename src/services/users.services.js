const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/usersCourses.model");

class UserServices {
    static async getUserById(id) {
        try {
            const result = await Users.findByPk(id,
                {
                    attributes: ['first_name', 'last_name', 'email'],
                });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async getUserCourseById(id) {
        try {
            const result = await Users.findOne({
                where: { id: id },
                attributes: ['first_name', 'last_name', 'email'],
                include: {
                    model: UsersCourses,
                    as: 'courses',
                    attributes: ['id'],
                    include: {
                        model: Courses,
                        as: 'courses',
                        attributes: ['title', 'description', 'instructor'],
                    }
                }
            });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async newUser(info) {
        try {
            const result = await Users.create(info);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async upUser(id, newInfo) {
        try {
            const result = await Users.update(newInfo, { where: { id: id } });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async addCourse(info) {
        try {
            const result = await UsersCourses.create(info);
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = UserServices;