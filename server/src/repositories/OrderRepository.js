import db from "../config/db.js";

const orderRepository = {

    async getAllOrders() {
        const result = await db.query(
            `SELECT * FROM orders`
        );
        return result.rows;
    },

    async getOrderById(id) {
        const result = await db.query(
            `SELECT * FROM orders
            WHERE id=$1`,
            [id]
        );

        return result.rows[0]
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
            commune
        } = order
        const result = await db.query(
            `INSERT INTO orders
                (first_name,last_name,user_id,email,address,phone,total_price,status,wilaya,commune) 
            VALUES 
                ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
            RETURNING *`,
            [first_name,last_name,user_id,email,address,phone,total_price,status,wilaya,commune]
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
            commune,
            status
        } = order
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
                commune = $9,
                status = $10
                WHERE id = $11
            RETURNING *`,
            [first_name,last_name,email,user_id,address,total_price,phone,wilaya,commune,status, id]
        );
        return result.rows[0];
    },

    async deleteOrder(id) {
        const result = await db.query(
            `UPDATE orders
            SET deleted = True
            WHERE id=$1 RETURNING *`,
            [id]
        );
        return result.rows[0];
    },

};

export default orderRepository