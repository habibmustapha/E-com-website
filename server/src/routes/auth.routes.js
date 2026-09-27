import express from "express";
import auth from "../controllers/AuthController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/admin/login", auth.adminLogin);

router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        id: req.user.id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        username: req.user.username,
        email: req.user.email,
        profile_image: req.user.profile_image,
        phone: req.user.phone,
        created_at : req.user.created_at,
        address : req.user.address,
        role: req.user.role
    });
});

export default router;