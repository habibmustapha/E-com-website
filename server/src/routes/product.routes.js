import express from "express";
import ProductController from "../controllers/ProductController.js";
import authMiddleware from "../middleware/auth.js";
import adminMiddleWare from "../middleware/admin.js";

const router = express.Router();

router.get("/", ProductController.getAllProducts);

router.get("/:id", ProductController.getProductsById);

router.post(
    "/",
    authMiddleware,
    adminMiddleWare,
    ProductController.createProduct
);

router.put(
    "/:id",
    authMiddleware,
    adminMiddleWare,
    ProductController.updateProduct
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleWare,
    ProductController.deleteProduct
);

export default router;