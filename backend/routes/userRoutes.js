import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// Test route to insert a user into MongoDB
router.get("/test", async (req, res) => {
  try {
    const testUser = await User.create({
      username: "semolekae_user",
      email: `semolekae${Date.now()}@mail.com`,
      password: "1234", // Normally you'd hash this
    });

    res.status(201).json({
      message: "✅ User created",
      user: testUser
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
