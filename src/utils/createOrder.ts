import axios from "axios";
import md5 from "md5";
import { nanoid } from "nanoid";

export default async function createOrder(
  produk: string,
  tujuan: string,
  server_id: string | undefined
) {
  try {
    const timeStamp = Date.now();
    const randomString = nanoid(15);

    const processOrder = await axios.post(
      "https://v1.apigames.id/v2/transaksi",
      {
        ref_id: `${timeStamp}${randomString}`,
        merchant_id: process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID,
        produk,
        tujuan,
        server_id,
        signature: md5(
          `${process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID}:${process.env.NEXT_PUBLIC_APIGAMES_SECRET_KEY}:${timeStamp}${randomString}`
        ),
      }
    );
    return processOrder;
  } catch (error) {
    return error;
  }
}
