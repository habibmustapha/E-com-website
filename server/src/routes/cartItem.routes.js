import CartItemsController from "../controllers/CartItemsController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, CartItemsController.getAllCartItems);
router.get("/:id", authMiddleware, CartItemsController.getCartItemsByCartId);
router.post("/", CartItemsController.createCartItem);
router.delete("/:id", authMiddleware, CartItemsController.deleteCartItem);

export default router;