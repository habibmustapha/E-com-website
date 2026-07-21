import db from "../config/db.js";

const UserRepository = {

    async getAllUser() {
        const result = await db.query(
            `SELECT * FROM users`
        );
        return result.rows;
    },

    async getUserById(id) {
        const result = await db.query(
            `SELECT * FROM users
            WHERE id=$1`
            [id]
        );

        return result.rows[0]
    },

    async createUser(user) {
        const {
            first_name,
            last_name,
            username,
            email,
            profile_image,
            role,
            phone,
            password_hash,
            activated,
        } = user
        const result = await db.query(
            `INSERT INTO users
                (first_name,last_name,username,email,profile_image,role,phone,password_hash,activated) 
            VALUES 
                ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING *`,
            [first_name,last_name,username,email,profile_image,role,phone,password_hash,activated]
        );
        return result.rows[0];
    },

    async updateUser(user, id) {
        const {
            first_name,
            last_name,
            username,
            email,
            profile_image,
            role,
            phone,
            password_hash,
            activated,
        } = user
        const result = await db.query(
            `UPDATE users
            SET 
                (first_name =$1,
                last_name =$2,
                username =$3,
                email =$4,
                profile_image =$5,
                role =$6,
                phone =$7,
                ps_hash =$8,
                activated =$9)
                WHERE id=$10
            RETURNING *`,
            [first_name,last_name,username,email,profile_image,role,phone,password_hash,activated, id]
        );
        return result.rows[0];
    },

    async deleteUser(id) {
        const result = await db.query(
            `UPDATE users
            SET deleted = True
            WHERE id=$1`,
            [id]
        );
        return result;
    },

};

export default userRepository