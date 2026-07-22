import CategoryRepository from "../repositories/CategoryRepository.js";

const CategoryController = {

        async getAllCategories(req,res) {
            try{
                const categories = await CategoryRepository.getAllCategories();
                res.status(200).json(categories);
            } catch(err) {
                console.error(err);
                res.status(500).json({
                    message : "Failed to fetch all categories"
                });
            }
        },

        async getCategoryById(req,res) {
            try {
                const id = req.params.id;
                const category = await CategoryRepository.getCategoryById(id);

                if(!category) {
                    res.status(404).json({
                        message : "Category not found"
                    });
                } else {
                    res.status(200).json(category);
                };

            } catch (err) {
                console.error(err);
                res.status(500).json({
                    message : "Failed to fetch category"
                });
            }
        },

        async createCategory(req,res) {
            try {
                const category = await CategoryRepository.createCategory(req.body);
                res.status(200).json(category)
            } catch (err) {
                console.error(err);
                res.status(500).json({
                    message : "Failed to create category"
                });
            }
        },


        async updateCategory(req,res) {
            try {
                const id = req.params.id;
                const category = await CategoryRepository.updateCategory(req.body , id);
                res.status(200).json(category)
            } catch (err) {
                console.error(err);
                res.status(500).json({
                    message : "Failed to update category"
                });
            }
        },

        async deleteCategory(req,res) {
            try {
                const id = req.params.id;
                const category = await CategoryRepository.deleteCategory( id);
                res.status(200).json(category)
            } catch (err) {
                console.error(err);
                res.status(500).json({
                    message : "Failed to delete category"
                });
            }
        }
}

export default CategoryController;