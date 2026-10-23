import mongoose from "mongoose";
import dns from "node:dns";
dns.setServers(['8.8.8.8', '1.1.1.1']);
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error("❌ MONGODB_URI is missing in .env");
      process.exit(1);
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/BGone`);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
