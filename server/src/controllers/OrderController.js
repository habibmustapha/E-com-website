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
        console.log("AUTHENTICATED USER:", req.user);
        
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
            const cart = await OrderRepository.createOrder(req.body);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot create cart"
            });
        }
    },

    async updateOrder(req, res) {
        try {
            const id = req.params.id;
            const cart = await OrderRepository.updateOrder(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot update cart"
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