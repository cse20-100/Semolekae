import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB using .env
connectDB(process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON bodies

// Routes
app.use("/api", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Semolekae backend!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
