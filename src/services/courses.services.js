const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CourseServices {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                attributes: ['id','title', 'description', 'instructor'],
            });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async getAllInfo() {
        try {
            const result = await Courses.findAll({
                attributes: ['title', 'description', 'instructor'],
                include: [
                    {
                        model: Categories,
                        as: 'category',
                        attributes: ['name'],
                    },
                    {
                        model: Videos,
                        as: 'video',
                        attributes: ['title', 'url'],
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async newCourse(info){
        try {
            const result = await Courses.create(info);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async editCourse(id, info){
        try {
            const result = await Courses.update(info, {
                where: {id: id},
            });
            return result;
        } catch (error) {
            throw error;
        }
    }   

};

module.exports = CourseServices;