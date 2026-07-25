import express from "express";
import ProductImageController from "../controllers/ProductImageController.js";


const router = express.Router();

router.get("/" , ProductImageController.getAllProductImage);
router.get("/:id" , ProductImageController.getProductImageByProductId);
router.post("/" , ProductImageController.createProductImage);
router.delete("/:id" , ProductImageController.deleteProductImage);

export default router;