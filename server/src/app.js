import productRoutes from "./routes/product.routes.js";
import productImageRoutes from "./routes/productImage.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import reviewsRoutes from "./routes/reviews.routes.js";
import cartItemsRoutes from "./routes/cartItem.routes.js";
import orderItemRoutes from "./routes/orderItem.routes.js";
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
app.use("/api/productImage", productImageRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/cart" , cartRoutes);
app.use("/api/cartItems" , cartItemsRoutes);
app.use("/api/orders" , orderRoutes);
app.use("/api/orderItem" , orderItemRoutes);
app.use("/api/reviews" , reviewsRoutes);


export default app;