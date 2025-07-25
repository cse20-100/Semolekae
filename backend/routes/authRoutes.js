import { Router } from "express";
import {
  login,
  signUp,
  upload,
} from "../controllers/authenticationController.js";

const authRouter = Router();
authRouter.post("/signup", signUp);
authRouter.post("/login", login);

export default authRouter;
