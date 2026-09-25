import orderController from "../controllers/OrderController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, orderController.getAllOrders);
router.get("/user", authMiddleware, orderController.getOrdersByUserId);
router.get("/:id", authMiddleware, orderController.getOrderById);
router.post("/", orderController.createOrder);
router.put("/:id",authMiddleware, orderController.updateOrder);
router.delete("/:id", authMiddleware, orderController.deleteOrder);

export default router;