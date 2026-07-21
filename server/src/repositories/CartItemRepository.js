import db from "../config/db.js";

const CartItemRepository = {
    async getAllCartItems() {
        const result = await db.query("SELECT * FROM cart_items");
        return result.rows;
    },

    async getCartItemsByCartId(id){
        const result = await db.query(
            `SELECT * FROM cart_items WHERE cart_id = $1`,
            [id]
        );
            return result.rows;
    },

    async createCartItem(Cart) {
        const {
            cart_id, 
            product_id, 
            qty
        } = Cart;
        const result = await db.query(
            `INSERT INTO cart_items 
                (cart_id, product_id, qty ) 
            VALUES  
                ($1,$2,$3)
            RETURNING *`,
            [cart_id, product_id, qty  ]
        );
        return result.rows[0];
    },


    async deleteCartItem(id) {
        const result = await db.query(
            `DELETE FROM cart_items WHERE id =$1 RETURNING *`,
            [id]
        );
        return result.rows[0];
    },

};

export default CartItemRepository;