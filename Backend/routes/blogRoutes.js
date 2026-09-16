import express from "express";
import { createBlog, getBlogs } from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", protect, createBlog);

export default router;
