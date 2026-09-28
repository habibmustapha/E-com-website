import express from "express";
import auth from "../controllers/AuthController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/admin/login", auth.adminLogin);
// router.get("/me", authMiddleware, (req, res) => {
//     console.log("ME USER:", req.user);

//     res.status(200).json(req.user);
// });

// router.get("/me", authMiddleware, (req, res) => {
//     res.status(200).json({
//         id: req.user.id,
//         first_name: req.user.first_name,
//         last_name: req.user.last_name,
//         username: req.user.username,
//         email: req.user.email,
//         profile_image: req.user.profile_image,
//         phone: req.user.phone,
//         created_at : req.user.created_at,
//         address : req.user.address,
//         role: req.user.role
//     });
// });


router.get("/me", authMiddleware, async (req, res) => {
    try {
        console.log("ME REQ.USER:", req.user);

        if (!req.user) {
            return res.status(401).json({
                message: "User not authenticated"
            });
        }

        return res.status(200).json({
            id: req.user.id,
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            username: req.user.username,
            email: req.user.email,
            profile_image: req.user.profile_image,
            role: req.user.role,
            phone: req.user.phone,
            activated: req.user.activated,
            deleted: req.user.deleted,
            address: req.user.address,
            created_at: req.user.created_at
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Cannot fetch current user"
        });
    }
});

export default router;