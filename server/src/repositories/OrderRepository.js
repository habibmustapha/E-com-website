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

    async getOrderByUserId(id) {
        const result = await db.query(
            `SELECT *
             FROM orders
             WHERE user_id = $1
             AND deleted = false
             ORDER BY created_at DESC;`,
            [id]
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

        const result = await db.query(
            `INSERT INTO orders
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
             RETURNING *;`,
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

        return result.rows[0];
    },

    async updateOrder(order, id) {
        const {
            first_name,
            last_name,
            email,
            user_id,
            address,
            total_price,
            phone,
            wilaya,
            communes,
            status
        } = order;

        const result = await db.query(
            `UPDATE orders
             SET
                first_name = $1,
                last_name = $2,
                email = $3,
                user_id = $4,
                address = $5,
                total_price = $6,
                phone = $7,
                wilaya = $8,
                communes = $9,
                status = $10,
                updated_at = CURRENT_TIMESTAMP
             WHERE id = $11
             RETURNING *;`,
            [
                first_name,
                last_name,
                email,
                user_id,
                address,
                total_price,
                phone,
                wilaya,
                communes,
                status,
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