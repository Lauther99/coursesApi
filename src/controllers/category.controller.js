const CategoryServices = require('../services/category.services')

const createCategory = async (req, res) => {
    try {
        const info = req.body;
        const result = await CategoryServices.createCat(info);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await CategoryServices.delCat(id);
        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = {
    createCategory,
    deleteCategory
};