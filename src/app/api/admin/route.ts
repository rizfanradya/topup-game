import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectMongoDB } from "@/utils/mongodb";
import adminModel from "@/models/admin";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await adminModel.create({ username, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
