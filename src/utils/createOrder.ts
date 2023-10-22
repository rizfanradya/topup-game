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
    const ref_id = `${timeStamp}${randomString}`;

    const merchantIdMd5 = md5(
      process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID as string
    );
    const secretKeyMd5 = md5(
      process.env.NEXT_PUBLIC_APIGAMES_SECRET_KEY as string
    );
    const refIdMd5 = md5(ref_id);
    const signature = md5(`${merchantIdMd5}:${secretKeyMd5}:${refIdMd5}`);

    if (server_id) {
      const processOrder = await axios.post(
        "https://v1.apigames.id/v2/transaksi",
        {
          ref_id,
          merchant_id: process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID,
          produk,
          tujuan,
          server_id,
          signature,
        }
      );
      return processOrder;
    } else if (server_id === undefined) {
      const processOrder = await axios.post(
        "https://v1.apigames.id/v2/transaksi",
        {
          ref_id,
          merchant_id: process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID,
          produk,
          tujuan,
          server_id: "",
          signature,
        }
      );
      return processOrder;
    }
  } catch (error) {
    return error;
  }
}
