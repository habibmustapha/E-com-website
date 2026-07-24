import orderItemRepository from "../repositories/orderItemRepository.js";


const OrderItemController = {

    async getAllOrderItems(req, res) {
        try {
            const carts = await orderItemRepository.getAllOrderItems();
            res.status(200).json(carts);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch all carts"
            });
        }
    },

    async getOrderItemsByOrderId(req, res) {
        try {
            const id = req.params.id;
            const cart = await orderItemRepository.getOrderItemsByOrderId(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch cart "
            });
        }
    },

    async createOrderItem(req, res) {
        try {
            const cart = await orderItemRepository.createOrderItem(req.body);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot create cart"
            });
        }
    },

    async deleteOrderItem(req, res) {
        try {
            const id = req.params.id;
            const cart = await orderItemRepository.deleteOrderItem(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot delete cart"
            });
        }
    },
};

export default OrderItemController;