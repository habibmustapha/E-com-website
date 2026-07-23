import productRoutes from "./routes/product.routes.js"
import categoryRoutes from "./routes/category.routes.js"
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true // Allow cookies
}));
app.use(cookieParser()); 

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);



export default app;