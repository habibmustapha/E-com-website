import db from "../config/db.js";

const CartItemRepository = {
    async getAllCartItems() {
        const result = await db.query(
            `SELECT * FROM cart_items`
        );

        return result.rows;
    },

    async getCartItemsByCartId(cartId) {
        const result = await db.query(
            `SELECT * FROM cart_items
             WHERE cart_id = $1
             ORDER BY created_at DESC`,
            [cartId]
        );

        return result.rows;
    },

    async getCartItemByProduct(cartId, productId) {
        const result = await db.query(
            `SELECT * FROM cart_items
             WHERE cart_id = $1
             AND product_id = $2`,
            [cartId, productId]
        );

        return result.rows[0];
    },

    async getCartItemsWithProductsByCartId(cartId) {
    const result = await db.query(
        `
        SELECT
            ci.id AS cart_item_id,
            ci.cart_id,
            ci.product_id,
            ci.qty,
            p.name,
            p.image_url,
            p.price,
            p.promo_price,
            COALESCE(p.promo_price, p.price) AS unit_price
        FROM cart_items ci
        JOIN products p
            ON p.id = ci.product_id
        WHERE ci.cart_id = $1
        ORDER BY ci.created_at DESC
        `,
        [cartId]
    );

    return result.rows;
},

    async createCartItem(cartItem) {
        const {
            cart_id,
            product_id,
            qty
        } = cartItem;

        const result = await db.query(
            `INSERT INTO cart_items
                (cart_id, product_id, qty)
             VALUES
                ($1, $2, $3)
             RETURNING *`,
            [cart_id, product_id, qty]
        );

        return result.rows[0];
    },

    async addCartItem(cartId, productId, qty = 1) {
        const result = await db.query(
            `INSERT INTO cart_items
                (cart_id, product_id, qty)
             VALUES
                ($1, $2, $3)
             ON CONFLICT (cart_id, product_id)
             DO UPDATE SET
                qty = cart_items.qty + EXCLUDED.qty
             RETURNING *`,
            [cartId, productId, qty]
        );

        return result.rows[0];
    },

    async updateCartItemQty(id, qty) {
        const result = await db.query(
            `UPDATE cart_items
             SET qty = $1
             WHERE id = $2
             RETURNING *`,
            [qty, id]
        );

        return result.rows[0];
    },

    async deleteCartItemByUser(id, userId) {
        const result = await db.query(
            `
            DELETE FROM cart_items ci
            USING cart c
            WHERE ci.id = $1
            AND ci.cart_id = c.id
            AND c.user_id = $2
            RETURNING ci.*
            `,
            [id, userId]
        );

        return result.rows[0];
    },

    
};

export default CartItemRepository;