import express, { Application } from "express";
import mongoose from "mongoose";
import config from "./config/config";
import seedData from "./utils/seed";
import carRouter from "./routes/car.routes";
import bikeRouter from "./routes/bike.routes";
import bookingRouter from "./routes/booking.routes";
import userRoutes from "./routes/user.routes";

const app: Application = express()
app.use(express.json())

mongoose.connect(
    config.app.MONGO_DB_URL!)
    .then(()=>  seedData())
    .then(()=> console.log("connected to MongoDB"))

    app.use("/", carRouter, bikeRouter, bookingRouter, userRoutes)


export default app