import express from "express";
import ReviewsController from "../controllers/ReviewsController.js";


const router = express.Router();

router.get("/" , ReviewsController.getAllReviews);
router.get("/:id" , ReviewsController.getReviewByUserId);
router.post("/" , ReviewsController.createReview);
router.put("/:id" , ReviewsController.updateReview);
router.delete("/:id" , ReviewsController.deleteReview);

export default router;