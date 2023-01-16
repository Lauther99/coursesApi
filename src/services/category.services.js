const Categories = require("../models/categories.model");

class CategoryServices{
    static async createCat(info){
        try {
            const result = await Categories.create(info);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async delCat(id){
        try {
            const result = await Categories.destroy({
                where: {id: id},
            })
            return result;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = CategoryServices;