import userRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";




dotenv.config()

const auth = {
    async register(req,res) {
        try{
            const { first_name , last_name , username , phone, email , password } = req.body;
            if (!first_name || !last_name || !username || !phone|| !email || !password ) {
                return res.status(400).json({
                    message : "Please provide all fileds"
                })
            } ;

            const userExiste = await userRepository.getUserByEmail(email);

            if (userExiste){
                return res.status(400).json({
                    message : "user Already existe"
                })
            } ;

            const ps_hash = await bcrypt.hash(password , 10);
            const newUser = await userRepository.createUser({
                first_name,
                last_name,
                username,
                phone,
                email,
                ps_hash,
                activated : false,
            });

            const generateToken = (id) => {
                return jwt.sign(
                    { id :id },
                    process.env.JWT_SECRET,
                    { expiresIn: "30d" }
                );
            };

            const token = generateToken(newUser.id);

            const cookieOptions = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production" ,
                sameSite : 'strict',
                maxAge : 30 * 24 * 60 * 60 * 1000
            }

            res.cookie('token', token, cookieOptions);

            return res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: newUser.id,
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    username: newUser.username,
                    email: newUser.email,
                    phone: newUser.phone
                }
            });

            } catch (err) {
                console.error(err);
                return res.status(500).json({
                    message : "Failed to create user"
                });
        }
    },
    

    async login(req,res) {
        try{
            const {email , password} = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message : "Please fill all fileds"
                })
            };
            
            const userData =  await userRepository.getUserByEmail(email);

            if(!userData) {
                return res.status(403).json({
                    message: "Incorrect password or email !!!"
                })
            }


            const correct_password = await bcrypt.compare(password, userData.ps_hash);

            if (!correct_password) {
                return res.status(403).json({
                    message : "incorrect password or email !!!"
                })
            };

            const generateToken = (id) => {
                return jwt.sign(
                    { id :id },
                    process.env.JWT_SECRET,
                    { expiresIn: "30d" }
                );
            };

            const cookieOptions = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production" ,
                sameSite : 'strict',
                maxAge : 30 * 24 * 60 * 60 * 1000
            }

            const token = generateToken(userData.id);

            res.cookie('token', token, cookieOptions);

            return res.status(200).json({
                id: userData.id,
                username : userData.username,
                email: userData.email,
                phone: userData.phone
            })

        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to login "
            });
        }
    },
}

export default auth;