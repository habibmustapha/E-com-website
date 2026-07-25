import ProductImageRepository from "../repositories/ProductImageRepository.js";

const ProductImageController = {

    async getAllProductImage(req,res) {
        try {
            const products = await ProductImageRepository.getAllProductImage();
            res.status(200).json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to fetch products"
            });
        };
    },


    async getProductImageByProductId(req, res) {
        try{
            const id = req.params.id;
            const product = await ProductImageRepository.getProductImageByProductId(id);
            

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

    async createProductImage(req, res) {
        try{
            const product = await ProductImageRepository.createProductImage(req.body);
            res.status(201).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to create Product"
            });
        }
    },



    async deleteProductImage(req, res) {
        try{
            const id = req.params.id;

            const product = await ProductImageRepository.deleteProductImage(id);
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to delete Product By id"
            });
        }
    },
};

export default ProductImageController;