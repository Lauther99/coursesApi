const Categories = require('../models/categories.model');
const Courses = require('../models/courses.model');
const Users = require('../models/users.model');
const UsersCourses = require('../models/usersCourses.model');
const Videos = require('../models/videos.model');

const initModels = () => {
    UsersCourses.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });
    Users.hasMany(UsersCourses, { as: 'courses', foreignKey: 'user_id' });

    UsersCourses.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' });
    Courses.hasMany(UsersCourses, { as: 'user', foreignKey: 'course_id' });

    Categories.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' });
    Courses.hasMany(Categories, {as: 'category', foreignKey: 'course_id'})

    Videos.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id'});
    Courses.hasMany(Videos, {as: 'video', foreignKey: 'course_id'});

};

module.exports = initModels;