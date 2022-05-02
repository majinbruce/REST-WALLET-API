import { Router } from "express";
import {
  signup,
  login,
  logOut,
  verifyOtp,
  getOtp,
} from "../controllers/authController.js";

const router = Router();

router.put("/signup", signup);
router.post("/login", login);
router.get("/getOtp", getOtp);
router.post("/verifyOtp", verifyOtp);
router.post("/logout", logOut);

export default router;
