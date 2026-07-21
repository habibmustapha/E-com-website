import db from "../config/db.js";

const OrderItemRepository = {
    async getAllOrderItems() {
        const result = await db.query("SELECT * FROM orderitems");
        return result.rows;
    },

    async getOrderItemsByOrderId(id){
        const result = await db.query(
            `SELECT * FROM orderitems WHERE order_id = $1`,
            [id]
        );
            return result.rows;
    },

    async createOrderItem(OrderItem) {
        const {
            product_id, 
            order_id, 
            qty,
            unit_price
        } = OrderItem;
        const result = await db.query(
            `INSERT INTO orderitems 
                (order_id, product_id, qty , unit_price) 
            VALUES  
                ($1,$2,$3,$4)
            RETURNING *`,
            [order_id, product_id, qty , unit_price ]
        );
        return result.rows[0];
    },


    async deleteOrderItem(id) {
        const result = await db.query(
            `DELETE FROM orderitems WHERE id =$1 RETURNING *`,
            [id]
        );
        return result.rows[0];
    },

};

export default OrderItemRepository;