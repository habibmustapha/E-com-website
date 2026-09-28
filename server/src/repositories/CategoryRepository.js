import db from "../config/db.js";

const CategoryRepository = {
    async getAllCategories() {
        const result = await db.query("SELECT * FROM category");
        return result.rows;
    },

    async getCategoryById(id){
        const result = await db.query(
            `SELECT * FROM category WHERE id = $1`,
            [id]
        );
            return result.rows[0];
    },

    async createCategory(Category) {
        const {
            name,
            image_url,
            description
        } = Category;
        const result = await db.query(
            `INSERT INTO category 
                (name , image_url, description) 
            VALUES  
                ($1,$2,$3)
            RETURNING *`,
            [name , image_url, description]
        );
        return result.rows[0];
    },

    async updateCategory(Category, id) {
        const {
            name,
            image_url,
            description
        } = Category;

        const result = await db.query(
            `UPDATE category
            SET 
                name = $1,
                image_url = $2,
                description = $3
            WHERE id=$4
            RETURNING *`,
            [name , image_url, description, id]
        );
        return result.rows[0];
    },

    async deleteCategory(id) {
    const result = await db.query(
        `
        WITH undefined_category AS (
            SELECT id
            FROM category
            WHERE name = 'Undefined'
            LIMIT 1
        ),
        moved_products AS (
            UPDATE products
            SET cat_id = (SELECT id FROM undefined_category)
            WHERE cat_id = $1
              AND $1 <> (SELECT id FROM undefined_category)
        )
        DELETE FROM category
        WHERE id = $1
          AND id <> (SELECT id FROM undefined_category)
        RETURNING *;
        `,
        [id]
    );

    return result.rows[0];
},

};

export default CategoryRepository;