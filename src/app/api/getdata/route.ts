import adminModel from "@/models/admin";
import { connectMongoDB } from "@/utils/mongo";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongoDB();
  try {
    const admins = await adminModel.find({});
    return NextResponse.json({ data: admins });
  } catch (error) {
    console.error("Error fetching admins:", error);
    throw error;
  }
};
