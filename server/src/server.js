import app from "./app.js";
import dotenv from "dotenv";
import { json } from "express";



const PORT = 5000;

app.listen(PORT , () => {
    console.log(`Server started on port ${PORT}`);
});

