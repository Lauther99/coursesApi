const { Router } = require('express');
const router = Router();

const {
    createCategory,
    deleteCategory
} = require('../controllers/category.controller')

router.post('/category/create', createCategory)

router.delete('/category/:id/delete', deleteCategory)

module.exports = router;