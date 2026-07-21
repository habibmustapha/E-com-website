import db from "../config/db.js";

const ReviewsRepository = {
    async getAllReviews() {
        const result = await db.query("SELECT * FROM reviews");
        return result.rows;
    },

    async getReviewByUserId(id){
        const result = await db.query(
            `SELECT * FROM reviews WHERE user_id = $1`,
            [id]
        );
            return result.rows[0];
    },

    async getReviewsByProductId(productId) {
        const result = await db.query(
            `SELECT * FROM reviews WHERE product_id = $1`,
            [productId]
        );

        return result.rows;
    },

    async createReview(reviews) {
        const {
            product_id,
            user_id,
            comment, 
            rating
        } = reviews;
        const result = await db.query(
            `INSERT INTO reviews 
                (product_id, user_id , comment, rating) 
            VALUES  
                ($1,$2,$3,$4)
            RETURNING *`,
            [product_id, user_id , comment, rating]
        );
        return result.rows[0];
    },

    async updateReview(review, id) {
        const {
            product_id,
            user_id,
            comment, 
            rating
        } = review;

        const result = await db.query(
            `UPDATE reviews
            SET 
                product_id = $1,
                user_id = $2,
                comment = $3,
                rating =$4
            WHERE id=$5
            RETURNING *`,
            [product_id, user_id , comment, rating, id]
        );
        return result.rows[0];
    },


    async deleteReview(id) {
        const result = await db.query(
            `DELETE FROM reviews WHERE id =$1 RETURNING *`,
            [id]
        );
        return result.rows[0];
    },

};

export default ReviewsRepository;