import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository.js';

async function authMiddleware (req, res, next) {
    try{
        if (!req.cookies) {
            return res.status(403).json({
                message: "No cookies found - access forbidden"
            });
        }

        const token = req.cookies.token;

        if (!token) {
            return res.status(403).json({
                message: "access Forbbiden !!!"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const id = decoded.id;
        const user = await UserRepository.getUserById(id);

        if (!user) {
            return res.status(404).json({
                message: "user not found "
            })
        };

        req.user = user;
        next();

    } catch (err) {
        console.error(err);
        return res.status(401).json({
            message: "not authorized failed token"
        }); 
    }
};

export default authMiddleware;