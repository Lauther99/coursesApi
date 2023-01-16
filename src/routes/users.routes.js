const { Router } = require('express');
const router = Router();

const {
    getUser,
    getUserCourses,
    createUser,
    updateUser,
    addCourse
} = require('../controllers/users.controller');

router.get('/users/:id', getUser);

router.get('/users/:id/courses', getUserCourses)

router.post('/users/create', createUser)

router.put('/users/:id/update', updateUser)

router.post('/users/:id/add', addCourse)

module.exports = router;