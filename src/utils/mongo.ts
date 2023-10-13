import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL as string);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb,", error);
  }
};
