import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error: any) {
    console.log(`Error connecting to MongoDB: `, error.message);
    process.exit(1);
  }
};
