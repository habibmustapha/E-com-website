import CartItemRepository from "../repositories/CartItemRepository.js";


const cartItemsController = {

    async getAllCartItems(req, res) {
        try {
            const carts = await CartItemRepository.getAllCartItems();
            res.status(200).json(carts);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch all carts"
            });
        }
    },

    async getCartItemsByCartId(req, res) {
        try {
            const id = req.params.id;
            const cart = await CartItemRepository.getCartItemsByCartId(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot fetch cart "
            });
        }
    },

    async createCartItem(req, res) {
        try {
            const cart = await CartItemRepository.createCartItem(req.body);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot create cart"
            });
        }
    },

    async deleteCartItem(req, res) {
        try {
            const id = req.params.id;
            const cart = await CartItemRepository.deleteCartItem(id);
            res.status(200).json(cart);
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: "Cannot delete cart"
            });
        }
    },
};

export default cartItemsController;