import OrderItemController from "../controllers/OrderItemController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, OrderItemController.getAllOrderItems);
router.get("/:id", authMiddleware, OrderItemController.getOrderItemsByOrderId);
router.post("/", OrderItemController.createOrderItem);
router.delete("/:id", authMiddleware, OrderItemController.deleteOrderItem);

export default router;