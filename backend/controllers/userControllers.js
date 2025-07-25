import User from "../models/userModel.js";

const singleUser = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    console.log("Authenticated user ID:", userId);

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized - no user ID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("Found user:", user);
    return res.status(200).json({ user });
  } catch (error) {
    console.error("singleUser error:", error);
    next(error);
  }
};

export { singleUser };
