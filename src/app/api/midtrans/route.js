import midtransClient from "midtrans-client";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  const { gross_amount, first_name } = request;

  const timeStamp = Date.now();
  const randomString = nanoid(15);

  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY_SB,
      serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY_SB,
    });

    const parameter = {
      transaction_details: {
        order_id: `${timeStamp}${randomString}`,
        gross_amount,
      },
      customer_details: {
        first_name,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    return NextResponse.json({
      status: "200",
      transaction,
    });
  } catch (error) {
    return NextResponse.json({ status: 404, message: error });
  }
};
