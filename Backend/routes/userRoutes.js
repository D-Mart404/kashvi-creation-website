import express from "express";
import { updateCart, updateWishlist } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/cart", protect, updateCart);
router.put("/wishlist", protect, updateWishlist);

export default router;
