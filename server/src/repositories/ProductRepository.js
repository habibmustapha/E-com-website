import db from "../config/db.js";

const ProductRepository = {
    async getAllProducts() {
        const result = await db.query(`SELECT
            p.id,
            p.name,
            p.price,
            p.qty,
            p.description,
            p.image_url,
            p.rating,
            p.brand,
            p.promo_price,
            c.name AS category
        FROM products p
        JOIN category c
        ON p.cat_id = c.id;`);
        return result.rows;
    },

    async getProductById(id){
        const result = await db.query(
            `SELECT products.*, category.name AS cat_name FROM products JOIN category ON products.cat_id = category.id WHERE products.id = $1 ` ,
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
            brand,
            rating,
            promo_price
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
                brand = $7,
                rating=$8,
                promo_price =$9,
                updated_at = NOW()
            WHERE id=$10
            RETURNING *`,
            [name , price, cat_id, image_url, description, qty, brand, rating ?? 0, promo_price || null, id]
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