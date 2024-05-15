import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";


const app = express();


config({
    path: "./config/config.env"
})

cookieParser

// import routes
import userRoutes from "./routes/userRoutes.js";

app.use("/api/v1", userRoutes);


export default app;