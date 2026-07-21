import db from "../config/db.js";

const CartRepository = {
    async getAllCarts() {
        const result = await db.query("SELECT * FROM cart");
        return result.rows;
    },

    async getCartByUserId(id){
        const result = await db.query(
            `SELECT * FROM cart WHERE user_id = $1`,
            [id]
        );
            return result.rows[0];
    },

    async createCart(Cart) {
        const {
            user_id
        } = Cart;
        const result = await db.query(
            `INSERT INTO cart 
                (user_id ) 
            VALUES  
                ($1)
            RETURNING *`,
            [user_id  ]
        );
        return result.rows[0];
    },


    async deleteCart(id) {
        const result = await db.query(
            `DELETE FROM cart WHERE id =$1 RETURNING *`,
            [id]
        );
        return result.rows[0];
    },

};

export default CartRepository;