import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectMongoDB } from "@/utils/mongo";
import adminModel from "@/models/admin";

export const POST = async (req: Request) => {
  try {
    const { username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const oldData = await adminModel.findOne({ username });
    if (oldData) {
      return NextResponse.json(
        { message: "username sudah ada" },
        { status: 201 }
      );
    } else {
      await adminModel.create({ username, password: hashedPassword });
      return NextResponse.json(
        { message: "User registered." },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
};
