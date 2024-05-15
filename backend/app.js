import { config } from "dotenv";
import express from "express";


const app = express();


config({
    path: "./config/config.env"
})

app.use(express.json());


// import routes
import userRoutes from "./routes/userRoutes.js";

app.use("/api/v1", userRoutes);


export default app;