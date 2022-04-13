import mongoose from "mongoose";

export default async function connectDB(): Promise<void> {
  try {
    const conn: typeof mongoose = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Could not connect to: ${process.env.MONGO_URI}`);
    process.exit(1);
  }
}
