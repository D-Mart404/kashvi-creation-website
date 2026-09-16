import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1);
  }
};
