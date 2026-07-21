import db from "../config/db.js";

const ProductRepository = {
    async getAllProducts() {
        const result = await db.query("SELECT * FROM products");
        return result.rows;
    },

    async getProductById(id){
        const result = await db.query(
            `SELECT * FROM products WHERE id = $1`
            [id]
        );
            return result.rows[0];
    },

    async createProduct(product) {
        const {
            name,
            price,
            cat_id,
            image_url,
            description,
            qty
        } = product;
        const result = await db.query(
            `INSERT INTO products 
                (name , price, cat_id, image_url, description, qty) 
            VALUES  
                ($1,$2,$3,$4,$5,$6)
            RETURNING *`,
            [name , price, cat_id, image_url, description, qty]
        );
        return result.rows[0];
    },

    async updateProduct(product, id) {
        const {
            name,
            price,
            cat_id,
            image_url,
            description,
            qty, 
            deleted
        } = product;

        const result = await db.query(
            `UPDATE products 
            SET 
                name = $1,
                price = $2,
                cat_id = $3,
                image_url = $4,
                description = $5,
                qty = $6,
                deleted = $7
            WHERE id=$8
            RETURNING *`,
            [name , price, cat_id, image_url, description, qty, deleted, id]
        );
        return result.rows[0];
    },

    async deleteProduct(id) {
        const result = await db.query(
            `UPDATE products
            SET deleted = True
            WHERE id= $1`,
            [id]
        );
        return result.rows[0];
    },

};

export default ProductRepository;