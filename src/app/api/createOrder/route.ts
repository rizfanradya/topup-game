import axios from "axios";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

type requestData = {
  produk: string;
  tujuan: string;
  server_id: string | undefined;
};

export const POST = async (req: Request) => {
  try {
    const { produk, tujuan, server_id }: requestData = await req.json();
    const timeStamp = Date.now();
    const randomString = nanoid(15);

    if (server_id) {
      const order = await axios.post("https://v1.apigames.id/v2/transaksi", {
        ref_id: `${timeStamp}${randomString}`,
        merchant_id: process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID,
        produk,
        tujuan,
        server_id,
        signature: process.env.NEXT_PUBLIC_APIGAMES_SIGNATURE,
      });
      return NextResponse.json({ order });
    } else if (server_id === undefined) {
      const order = await axios.post("https://v1.apigames.id/v2/transaksi", {
        ref_id: `${timeStamp}${randomString}`,
        merchant_id: process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID,
        produk,
        tujuan,
        server_id: "",
        signature: process.env.NEXT_PUBLIC_APIGAMES_SIGNATURE,
      });
      return NextResponse.json({ order });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
};
