import express from "express"; 
import cors from "cors"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from './models/User.js';
import { Resend } from "resend";
import Invoice from "./models/Invoice.js";
import OTP from './models/Otp.js';
import sendEmail from './Utils/sendEmail.js';
const app = express();
const port = 5000; 
dotenv.config();

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed", err));


app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express' });
});

app.post("/api/login", async (req, res) => {
  console.log("Login API Called");
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    
    res.json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        cart: user.cart, 
        message:"Login done",
        adress:user.adress,
        wishlist:user.wishlist
      }
    });

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});



const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();


app.post("/api/send-otp", async (req, res) => {

  console.log("Send otp logged");
    const {username, email } = req.body;
    const existingUser = await User.findOne({ username });
  if (existingUser) {
  return res.status(400).json({ message: "Username already exists" });
  }

    const otp = generateOTP();

    await OTP.findOneAndUpdate({ email }, { otp, createdAt: new Date() }, { upsert: true });

    try {

        await sendEmail(email, otp);
        res.json({ success: true, message: "OTP sent successfully to your email." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send OTP." });
    }
});


app.post("/api/signup", async (req, res) => {
  console.log("Hello new signup");
  const { username, password, email, otp } = req.body;
  console.log(username);
  const storedOtp = await OTP.findOne({ email });
  if (!storedOtp || storedOtp.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
  }


  const newUser = new User({ username, password, email, verified: true });
  await newUser.save();

  
  await OTP.deleteOne({ email });

  res.json({ success: true, message: "Signup successful!" });
});




app.post("/api/updateCart", async (req, res) => {
  const { userId, newCart } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log(user);
    user.cart = newCart;
    await user.save();
    res.json({ success: true, message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/updatewishlist", async (req, res) => {
  const { userId, wishlist} = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log(user);
    user.wishlist = wishlist;
    await user.save();
    res.json({ success: true, message: "Wishlist updated successfully" });
  } catch (error) {
    console.error("Error updating Wishlist:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

var orderId=Math.random()*100000000+1;
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/send-invoice", async (req, res) => {
  try {
    const { email, username, amount ,items} = req.body;
    const itemList = items
    .map((item) => `<li>${item.quantity} x ${item.name}</li>`)
    .join("");

    const emailContent = `
      <h2>Invoice for Your Purchase</h2>
      <p>Date: ${new Date().toLocaleDateString()}</p>
      <br>
      <p>Hi ${username},</p>
      <p>Thank you for your order. Here are the details:</p>
      <ul>${itemList}</ul>
      <p><strong>Total Amount:</strong> ₹${amount}</p>
      <p>Best regards,</p>
      <p>Your Business</p>
    `;
 
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Invoice for Order #${orderId}`,
      html: emailContent,
    });
    orderId=orderId+1;
    const newInvoice = new Invoice({ orderId, username, amount, items });
    await newInvoice.save();
    res.json({ success: true, message: "Invoice sent successfully!", response });
  } catch (error) {
    console.error("Error sending invoice:", error);
    res.status(500).json({ success: false, error: "Failed to send invoice" });
  }
});

app.post("/api/get-invoice", async (req, res) => {
  console.log("hello");
  try {
    const { username } = req.body; 

    if (!username) {
      return res.status(400).json({ success: false, message: "Username is required" });
    }

    const invoices = await Invoice.find({ username });

    if (invoices.length === 0) {
      return res.status(404).json({ success: false, message: "No invoices found" });
    }

    res.json({ success: true, invoices });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ success: false, error: "Failed to fetch invoices" });
  }

});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
