const { Router } = require('express');
const router = Router();
const {
    getAllCourses,
    getAllInfo,
    createCourse,
    updateCourse,
} = require('../controllers/courses.controller');

router.get('/courses', getAllCourses);

router.get('/courses/info', getAllInfo);

router.post('/courses/create', createCourse);

router.put('/courses/:id', updateCourse);

module.exports = router;