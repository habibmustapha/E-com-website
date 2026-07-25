



async function adminMiddleWare(req,res,next) {
    try{
        if (req.user.role !== "admin") {
            return res,status(403).json({
                message : "Access denied"
            });
        };

        next();
    } catch (err) {
        console.error(err);
        return res.status(403).json({
            message : "not an admin"
        })
    }
};

export default adminMiddleWare;