import express from "express";
import { createInvoice, getInvoices } from "../controllers/invoiceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createInvoice);
router.get("/", protect, getInvoices);

export default router;
