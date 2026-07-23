import express from "express"; 
import userController from "../controllers/UserController";


const router = express.Router();


router.get("/" , userController.getAllUsers);
router.get("/:id" , userController.getUserById);
router.post("/" , userController.createUser);
router.update("/:id" , userController.updateUser);
router.delete("/:id" , userController.deleteUser);

export default router;