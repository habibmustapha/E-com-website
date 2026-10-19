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
    try {
        const {
            name,
            price,
            cat_id,
            image_url,
            description,
            qty = 0,
            brand,
            promo_price
        } = req.body;

        // Validate required fields
        if (!name || !name.trim()) {
            return res.status(400).json({
                message: "Product name is required"
            });
        }

        const parsedPrice = Number(price);
        const parsedQty = Number(qty);
        const parsedCategoryId =
            cat_id === "" || cat_id == null ? null : Number(cat_id);

        if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
            return res.status(400).json({
                message: "Price must be greater than zero"
            });
        }

        if (!Number.isInteger(parsedQty) || parsedQty < 0) {
            return res.status(400).json({
                message: "Quantity must be a non-negative integer"
            });
        }

        if (
            parsedCategoryId !== null &&
            (!Number.isInteger(parsedCategoryId) || parsedCategoryId <= 0)
        ) {
            return res.status(400).json({
                message: "Invalid category"
            });
        }

        const parsedPromoPrice =
            promo_price === "" || promo_price == null
                ? null
                : Number(promo_price);

        if (
            parsedPromoPrice !== null &&
            (!Number.isFinite(parsedPromoPrice) ||
                parsedPromoPrice <= 0 ||
                parsedPromoPrice >= parsedPrice)
        ) {
            return res.status(400).json({
                message: "Promotional price must be greater than zero and lower than the regular price"
            });
        }

        const product = await ProductRepository.createProduct({
            name: name.trim(),
            price: parsedPrice,
            cat_id: parsedCategoryId,
            image_url: image_url?.trim() || null,
            description: description?.trim() || null,
            qty: parsedQty,
            brand: brand?.trim() || null,
            promo_price: parsedPromoPrice
        });

        return res.status(201).json({
            message: "Product created successfully",
            product
        });
    } catch (err) {
        console.error("Create product error:", err);

        return res.status(500).json({
            message: "Failed to create product"
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