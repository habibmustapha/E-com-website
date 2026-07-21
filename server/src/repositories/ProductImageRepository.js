import db from "../config/db.js";

const ProductImageRepository = {
    async getAllProductImage() {
        const result = await db.query("SELECT * FROM product_images");
        return result.rows;
    },

    async getProductImageByProductId(id){
        const result = await db.query(
            `SELECT * FROM product_images WHERE product_id = $1`,
            [id]
        );
            return result.rows;
    },

    async createProductImage(ProductImage) {
        const {
            product_id, 
            image
        } = ProductImage;
        const result = await db.query(
            `INSERT INTO product_images 
                (product_id, image) 
            VALUES  
                ($1,$2)
            RETURNING *`,
            [product_id, image ]
        );
        return result.rows[0];
    },


    async deleteProductImage(id) {
        const result = await db.query(
            `DELETE FROM product_images WHERE id =$1 RETURNING *`,
            [id]
        );
        return result.rows[0];
    },

};

export default ProductImageRepository;