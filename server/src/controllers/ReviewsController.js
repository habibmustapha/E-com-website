import ReviewsRepository from "../repositories/ReviewsRepository.js";

const ReviewsController = {
    async getAllReviews(req,res) {
        try {
            const products = await ReviewsRepository.getAllReviews();
            res.status(200).json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to fetch products"
            });
        };
    },


    async getReviewByUserId(req, res) {
        try{
            const id = req.params.id;
            const product = await ReviewsRepository.getReviewByUserId(id);
            

            if(!product) {
                return res.status(404).json({
                    message: "product not found"
                });
            } else {
                res.status(200).json(product);
            };

        } catch (err) {
            console.error(err);
            res.status(404).json({
                message: "Failed to fetch Product By id"
            });
        }
    },

    async createReview(req, res) {
        try{
            const product = await ReviewsRepository.createReview(req.body);
            res.status(201).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to create Product"
            });
        }
    },

    async updateReview(req, res) {
        try{
            const id = req.params.id;
            const product = await ReviewsRepository.updateReview(req.body, id);
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to update Product"
            });
        }
    },


    async deleteReview(req, res) {
        try{
            const id = req.params.id;

            const product = await ReviewsRepository.deleteReview(id);
            res.status(200).json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to delete Product By id"
            });
        }
    },
};

export default ReviewsController;