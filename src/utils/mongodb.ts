import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb,", error);
  }
};
