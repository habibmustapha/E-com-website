import CartRepository from "../repositories/CartRepository.js";
import CartItemRepository from "../repositories/CartItemRepository.js";


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
        const userId = req.user.id;

        const cart = await CartRepository.getOrCreateCart(userId);

        const items =
            await CartItemRepository.getCartItemsWithProductsByCartId(
                cart.id
            );

        res.status(200).json({
            cart,
            items
        });
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

    async addToCart(req, res) {
    try {
        const userId = req.user.id;
        const { product_id, qty } = req.body;

        if (!product_id) {
            return res.status(400).json({
                message: "Product ID is required"
            });
        }

        const cart = await CartRepository.getOrCreateCart(userId);

        const cartItem = await CartItemRepository.addCartItem(
            cart.id,
            product_id,
            qty || 1
        );

        res.status(200).json(cartItem);

    } catch (err) {
        console.error(err);

        res.status(400).json({
            message: "Cannot add product to cart"
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