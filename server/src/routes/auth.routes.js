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
        username: req.user.username,
        email: req.user.email,
        role: req.user.role
    });
});

export default router;