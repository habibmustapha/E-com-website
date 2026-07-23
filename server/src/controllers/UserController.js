import userRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";

const userController = {

    async getAllUsers(req,res) {
        try {
            const users = await userRepository.getAllUsers();
            return res.status(200).json(users);
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message : "failed to fetch all users"
            });
        }
    },

    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await userRepository.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    message : "user not found"
                });
            } else {
                return res.status(200).json(user);
            };
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message : "Failed to fetch user"
            });
        }
    },

    async createUser(req, res) {
        try {
            const userData = req.body;
            const ps_hash = await bcrypt.hash(userData.password, 10);
            const newUserData = {
                first_name: userData.first_name,
                last_name: userData.last_name,
                username: userData.username,
                email: userData.email,
                profile_image: userData.profile_image || null,
                phone: userData.phone,
                ps_hash: ps_hash,  // ← Use hashed password
                activated: userData.activated || false,
            };
            const user = await userRepository.createUser(newUserData);
            const { ps_hash: _, ...userWithoutPassword } = user;
            return res.status(201).json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message : "Failed to create user"
            });
        }
    },

    async updateUser(req,res) {
        try {
            const id = req.params.id;
            const user = await userRepository.updateUser(id);
            if (!user) {
                return res.status(404).json({
                    message : "user not found"
                });
            } else {
                return res.status(200).json(user);
            };
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message : "Failed to update user"
            });
        }
    },

    async deleteUser(req,res) {
        try {
            const id = req.params.id;
            const user = await userRepository.deleteUser(id);
            if (!user) {
                return res.status(404).json({
                    message : "user not found"
                });
            } else {
                return res.status(200).json(user);
            };
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message : "Failed to delete user"
            });
        }
    },

};

export default userController;