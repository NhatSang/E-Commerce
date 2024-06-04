import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse the incoming requests with JSON payloads

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    connectMongoDB();
});
