import mongoose from "mongoose";

export default async function connectDB() {
  const URI = process.env.MONGOURI || "localhost:2717";
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {}, () =>
      console.log(`MongoDB Connection: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
