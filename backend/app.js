import { config } from "dotenv";
import express from "express";
import ErrorMiddleware from "./middlewares/Error.js";
import cors from 'cors';
import cookieParser from "cookie-parser";




const app = express();


config({
    path: "./config/config.env"
})

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
);
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000', // Change this to your client's URL
    credentials: true,
  };
  
app.use(cors(corsOptions));



// import routes
import userRoutes from "./routes/userRoutes.js";

app.use("/api/v1", userRoutes);


export default app;

app.use(ErrorMiddleware)