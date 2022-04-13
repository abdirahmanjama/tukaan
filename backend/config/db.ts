import mongoose from "mongoose";

export default async function connectDB() {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Could not connect to: ${process.env.MONGO_URI}`);
    process.exit(1);
  }
}
