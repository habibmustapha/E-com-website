import userRepository from "../repositories/UserRepository.js";

const userController = {

    async getAllUsers(req,res) {
        try {
            const users = await userRepository.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message : "failed to fetch all users"
            });
        }
    },

    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await userRepository.getUserById(id);
            if (!user) {
                res.status(404).json({
                    message : "user not found"
                });
            } else {
                res.status(200).json(user);
            };
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message : "Failed to fetch user"
            });
        }
    },

    async createUser(req, res) {
        try {
            const user = await userRepository.createUser(req,body);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message : "Failed to create user"
            });
        }
    },

    async updateUser(req,res) {
        try {
            const id = req.params.id;
            const user = await userRepository.updateUser(id);
            if (!user) {
                res.status(404).json({
                    message : "user not found"
                });
            } else {
                res.status(200).json(user);
            };
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message : "Failed to update user"
            });
        }
    },

    async deleteUser(req,res) {
        try {
            const id = req.params.id;
            const user = await userRepository.deleteUser(id);
            if (!user) {
                res.status(404).json({
                    message : "user not found"
                });
            } else {
                res.status(200).json(user);
            };
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message : "Failed to delete user"
            });
        }
    },

};

export default userController;