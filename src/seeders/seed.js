const db = require('../utils/db');

const Users = require('../models/users.model');
const Courses = require('../models/courses.model');
const Categories = require('../models/categories.model');
const Videos = require('../models/videos.model');
const UsersCourses = require('../models/usersCourses.model');

const data = {
    users: [
        {
            firstName: 'valladares',
            lastName: 'ipanaque',
            password: 'password',
            email: 'email@valladares.com',
        },
        {
            firstName: 'primera',
            lastName: 'orden',
            password: 'generacionren',
            email: 'primera@orden.ren',
        }
    ],
    courses: [
        {
            title: 'Fundamentos',
            description: 'Fundamentos con html, css y js',
            instructor: 'Brenda'
        },
        {
            title: 'Frontend',
            description: 'Desarrollo de frontend con React.js',
            instructor: 'Andres'
        },
        {
            title: 'Backend',
            description: 'Desarrollo de backend con Node.js',
            instructor: 'Ian'
        },
    ],
    categories: [
        {
            name: 'Development',
            courseId: '1'
        },
        {
            name: 'Front Development',
            courseId: '2'
        },
        {
            name: 'Back Development',
            courseId: '3'
        },
    ],
    videos: [
        {
            title: 'Introduction to js video',
            url: 'www.introjs.com',
            courseId: '1'
        },
        {
            title: 'Front video',
            url: 'www.introjs.com',
            courseId: '2'
        },
        {
            title: 'Back video',
            url: 'www.introjs.com',
            courseId: '3'
        }
    ],
    usersCourses: [
        { userId: '1', courseId: '1' },
        { userId: '1', courseId: '2' },
        { userId: '1', courseId: '3' },
        { userId: '2', courseId: '1' },
        { userId: '2', courseId: '2' },
        { userId: '2', courseId: '3' },
    ],
}

db.sync({ force: true })
    .then(() => {
        data.users.forEach(u => {
            Users.create(u)
        });

        setTimeout(() => {
            data.courses.forEach(c => Courses.create(c));
        }, 500);

        setTimeout(() => {
            data.categories.forEach(cat => Categories.create(cat));
        }, 1000);

        setTimeout(() => {
            data.videos.forEach(v => Videos.create(v));
        }, 1500);

        setTimeout(() => {
            data.usersCourses.forEach(uc => UsersCourses.create(uc));
        }, 2000);
    })
    .catch(error => console.log(error));