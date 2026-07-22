import ProductRepository from "../repositories/ProductRepository.js";

const ProductController = {

    async getAllProducts(req,res) {
        try {
            const products = await ProductRepository.getAllProducts();
            res.status(200).json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to fetch products"
            });
        };
    },


    async getProductsById(req, res) {
        try{
            const id = req.params.id;
            const product = await ProductRepository.getProductById(id);
            

            if(!product) {
                return res.status(404).json({
                    message: "product not found"
                });
            } else {
                res.status(200).json(product);
            };

        } catch (err) {
            console.error(err);
            res.status(404).json({
                message: "Failed to fetch Product By id"
            });
        }
    },

    async createProduct(req, res) {
        try{
            const product = await ProductRepository.createProduct(req.body);
            res.status(201).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to create Product"
            });
        }
    },

    async updateProduct(req, res) {
        try{
            const id = req.params.id;
            const product = await ProductRepository.updateProduct(req.body, id);
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to update Product"
            });
        }
    },


    async deleteProduct(req, res) {
        try{
            const id = req.params.id;

            const product = await ProductRepository.deleteProduct(id);
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to delete Product By id"
            });
        }
    },
};

export default ProductController;