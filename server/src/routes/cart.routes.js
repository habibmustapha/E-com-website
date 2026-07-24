import cartController from "../controllers/CartController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, cartController.getAllCarts);
router.get("/:id", authMiddleware, cartController.getCartByUserId);
router.post("/", cartController.createCart);
router.put("/:id",authMiddleware, cartController.updateCart);
router.delete("/:id", authMiddleware, cartController.deleteCart);

export default router;