import express from "express"; 
import userController from "../controllers/UserController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();


router.get("/" , userController.getAllUsers);
router.get("/:id" , userController.getUserById);
router.post("/" , userController.createUser);
router.put("/:id" , userController.updateUser);
router.delete("/:id" ,authMiddleware, userController.deleteUser);

export default router;