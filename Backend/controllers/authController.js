import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import OTP from "../models/Otp.js";
import sendEmail from "../Utils/sendEmail.js";
import { env } from "../config/env.js";

const buildUserResponse = (user) => ({
  _id: user._id,
  username: user.username,
  email: user.email,
  cart: user.cart || [],
  wishlist: user.wishlist || [],
  address: user.address || "",
});

const signToken = (user) =>
  jwt.sign({ userId: user._id }, env.jwtSecret, { expiresIn: env.jwtExpiresIn });

const generateOTP = () => crypto.randomInt(1000, 10000).toString();

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username }).select("+passwordHash +password");

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    if (!user.passwordHash && user.password === password) {
      user.passwordHash = await bcrypt.hash(password, 12);
      user.password = undefined;
      await user.save();
    }

    if (!user.passwordHash) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    return res.json({
      success: true,
      message: "Login done",
      token: signToken(user),
      user: buildUserResponse(user),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const sendOtp = async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ success: false, message: "Username and email are required" });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ username }, { email: email.toLowerCase() }],
    });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "Username or email already exists" });
    }

    const otp = generateOTP();
    await OTP.findOneAndUpdate({ email: email.toLowerCase() }, { otp, createdAt: new Date() }, { upsert: true });
    await sendEmail(email, otp);

    return res.json({ success: true, message: "OTP sent successfully to your email." });
  } catch (error) {
    console.error("Failed to send OTP:", error);
    return res.status(500).json({ success: false, message: "Failed to send OTP." });
  }
};

export const signup = async (req, res) => {
  const { username, password, email, otp } = req.body;

  if (!username || !password || !email || !otp) {
    return res.status(400).json({ success: false, message: "All signup fields are required" });
  }

  try {
    const normalizedEmail = email.toLowerCase();
    const storedOtp = await OTP.findOne({ email: normalizedEmail });

    if (!storedOtp || storedOtp.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const existingUser = await User.findOne({
      $or: [{ username }, { email: normalizedEmail }],
    });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "Username or email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      passwordHash,
      email: normalizedEmail,
      verified: true,
    });

    await OTP.deleteOne({ email: normalizedEmail });

    return res.status(201).json({
      success: true,
      message: "Signup successful!",
      token: signToken(user),
      user: buildUserResponse(user),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const me = (req, res) => {
  return res.json({ success: true, user: buildUserResponse(req.user) });
};
