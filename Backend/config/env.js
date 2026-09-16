import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET || "development-only-jwt-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  clientOrigin: process.env.CLIENT_ORIGIN || "*",
  resendApiKey: process.env.RESEND_API_KEY,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};

if (!env.mongoUri) {
  throw new Error("MONGO_URI is required in Backend/.env");
}

if (!process.env.JWT_SECRET) {
  console.warn("JWT_SECRET is missing. Add it to Backend/.env before deployment.");
}
