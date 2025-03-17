import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI as string;

if (!mongoURI) {
  throw new Error("❌ MongoDB URI is not defined in environment variables!");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export const ConnectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("Creating new MongoDB connection...");
    cached.promise = mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 50000,
    }).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log(`✅ MongoDB Connected: ${cached.conn.connection.host}`);
  } catch (error: any) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    throw error;
  }

  return cached.conn;
};
