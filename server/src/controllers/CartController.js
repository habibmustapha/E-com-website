import CartRepository from "../repositories/CartRepository.js";


const cartController = {

    async getAllCarts(req, res) {
        try {
            const carts = await CartRepository.getAllCarts();
            res.status(200).json(carts);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch all carts"
            });
        }
    },

    async getCartByUserId(req, res) {
        try {
            const id = req.params.id;
            const cart = await CartRepository.getCartByUserId(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch cart"
            });
        }
    },

    async createCart(req, res) {
        try {
            const cart = await CartRepository.createCart(req.body);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot create cart"
            });
        }
    },

    async updateCart(req, res) {
        try {
            const id = req.params.id;
            const cart = await CartRepository.updateCart(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot update cart"
            });
        }
    },

    async deleteCart(req, res) {
        try {
            const id = req.params.id;
            const cart = await CartRepository.deleteCart(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot delete cart"
            });
        }
    },
};

export default cartController;