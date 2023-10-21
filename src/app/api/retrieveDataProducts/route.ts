import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.products.findMany();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
