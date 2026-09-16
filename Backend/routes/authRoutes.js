import express from "express";
import { login, me, sendOtp, signup } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/signup", signup);
router.get("/me", protect, me);

export default router;
