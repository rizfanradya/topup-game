import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { id } = await req.json();
  try {
    const data = await prisma.products.findUnique({
      where: { id },
      include: { productsPriceType: { include: { priceItem: true } } },
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
