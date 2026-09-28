import OrderRepository from "../repositories/OrderRepository.js";


const orderController = {

    async getAllOrders(req, res) {
        try {
            const carts = await OrderRepository.getAllOrders();
            res.status(200).json(carts);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch all carts"
            });
        }
    },

    async getOrderById(req, res) {
        try {
            const id = req.params.id;
            const cart = await OrderRepository.getOrderById(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch cart"
            });
        }
    },

    async getOrdersByUserId(req, res) {
    try {
        
        const userId = req.user.id;

        const orders = await OrderRepository.getOrdersByUserId(userId);

        res.status(200).json(orders);
    } catch (err) {
        console.error(err);

        res.status(400).json({
            message: "Cannot fetch orders"
        });
    }
},

    async createOrder(req, res) {
    try {
        const {
            first_name,
            last_name,
            address,
            phone,
            total_price,
            wilaya,
            communes
        } = req.body;

        const order = await OrderRepository.createOrder({
            first_name,
            last_name,
            user_id: req.user.id,
            email: req.user.email,
            address,
            phone,
            total_price,
            status: "pending",
            wilaya,
            communes
        });

        res.status(201).json(order);

    } catch (err) {
        console.error(err);

        res.status(400).json({
            message: "Cannot create order"
        });
    }
},

    async updateOrder(req, res) {
    try {
        const id = req.params.id;

        const order = await OrderRepository.updateOrder(
            id,
            req.body
        );

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(order);

    } catch (err) {
        console.error(err);

        res.status(400).json({
            message: "Cannot update order"
        });
    }
},

    async deleteOrder(req, res) {
        try {
            const id = req.params.id;
            const cart = await OrderRepository.deleteOrder(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot delete cart"
            });
        }
    },
};

export default orderController;