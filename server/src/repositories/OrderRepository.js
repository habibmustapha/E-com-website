import db from "../config/db.js";

const OrderRepository = {
    async getAllOrders() {
        const result = await db.query(
            `SELECT *
             FROM orders
             WHERE deleted = false
             ORDER BY created_at DESC;`
        );

        return result.rows;
    },

    async getOrderById(id) {
        const result = await db.query(
            `SELECT *
             FROM orders
             WHERE id = $1
             AND deleted = false;`,
            [id]
        );

        return result.rows[0];
    },

    async getOrdersByUserId(userId) {
    const result = await db.query(
        `
        SELECT
            o.id AS order_id,
            o.created_at,
            o.status,
            o.total_price,
            oi.id AS item_id,
            oi.product_id,
            oi.qty,
            oi.unit_price,
            p.name AS product_name,
            p.image_url
        FROM orders o
        JOIN orderitems oi
            ON oi.order_id = o.id
        JOIN products p
            ON p.id = oi.product_id
        WHERE o.user_id = $1
          AND o.deleted = false
        ORDER BY o.created_at DESC
        `,
        [userId]
    );

    return result.rows;
},

    async createOrder(order) {
    const {
        first_name,
        last_name,
        user_id,
        email,
        address,
        phone,
        total_price,
        status,
        wilaya,
        communes
    } = order;

    const client = await db.connect();

    try {
        await client.query("BEGIN");

        // Find the user's cart
        const cartResult = await client.query(
            `
            SELECT id
            FROM cart
            WHERE user_id = $1
            `,
            [user_id]
        );

        const cart = cartResult.rows[0];

        if (!cart) {
            throw new Error("Cart not found");
        }

        // Get cart items with their current prices
        const itemsResult = await client.query(
            `
            SELECT
                ci.product_id,
                ci.qty,
                COALESCE(p.promo_price, p.price) AS unit_price
            FROM cart_items ci
            JOIN products p
                ON p.id = ci.product_id
            WHERE ci.cart_id = $1
            `,
            [cart.id]
        );

        const items = itemsResult.rows;

        if (items.length === 0) {
            throw new Error("Cart is empty");
        }

        // Create the order
        const orderResult = await client.query(
            `
            INSERT INTO orders
            (
                first_name,
                last_name,
                user_id,
                email,
                address,
                phone,
                total_price,
                status,
                wilaya,
                communes
            )
            VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
            RETURNING *
            `,
            [
                first_name,
                last_name,
                user_id,
                email,
                address,
                phone,
                total_price,
                status,
                wilaya,
                communes
            ]
        );

        const createdOrder = orderResult.rows[0];

        // Create order items
        for (const item of items) {
            await client.query(
                `
                INSERT INTO orderitems
                (
                    order_id,
                    product_id,
                    qty,
                    unit_price
                )
                VALUES
                ($1,$2,$3,$4)
                `,
                [
                    createdOrder.id,
                    item.product_id,
                    item.qty,
                    item.unit_price
                ]
            );
        }

        // Empty the cart
        await client.query(
            `
            DELETE FROM cart_items
            WHERE cart_id = $1
            `,
            [cart.id]
        );

        await client.query("COMMIT");

        return createdOrder;

    } catch (err) {
        await client.query("ROLLBACK");
        throw err;
    } finally {
        client.release();
    }
},

    async updateOrder(id, order) {
    const {
        first_name,
        last_name,
        email,
        address,
        phone,
        total_price,
        status,
        wilaya,
        communes
    } = order;

    const result = await db.query(
        `
        UPDATE orders
        SET
            first_name = $1,
            last_name = $2,
            email = $3,
            address = $4,
            phone = $5,
            total_price = $6,
            status = $7,
            wilaya = $8,
            communes = $9,
            updated_at = NOW()
        WHERE id = $10
        AND deleted = false
        RETURNING *
        `,
        [
            first_name,
            last_name,
            email,
            address,
            phone,
            total_price,
            status,
            wilaya,
            communes,
            id
        ]
    );

    return result.rows[0];
},

    async deleteOrder(id) {
        const result = await db.query(
            `UPDATE orders
             SET
                deleted = true,
                updated_at = CURRENT_TIMESTAMP
             WHERE id = $1
             RETURNING *;`,
            [id]
        );

        return result.rows[0];
    },
};

export default OrderRepository;