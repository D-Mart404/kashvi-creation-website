import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { connectDb } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import { login, sendOtp, signup } from "./controllers/authController.js";
import { protect } from "./middleware/authMiddleware.js";
import { updateCart, updateWishlist } from "./controllers/userController.js";
import { createInvoice, getInvoices } from "./controllers/invoiceController.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: env.clientOrigin === "*" ? true : env.clientOrigin,
  credentials: true,
}));

connectDb();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express' });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/blogs", blogRoutes);

app.post("/api/login", login);
app.post("/api/send-otp", sendOtp);
app.post("/api/signup", signup);
app.post("/api/updateCart", protect, updateCart);
app.post("/api/updatewishlist", protect, updateWishlist);
app.post("/api/send-invoice", protect, createInvoice);
app.get("/api/get-invoice", protect, getInvoices);

app.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port}`);
});
