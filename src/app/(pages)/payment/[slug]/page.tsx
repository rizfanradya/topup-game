import Navbar from "@/app/navbarHeader";
import axios from "axios";
import FormPayment from "../form";
import Image from "next/image";

const Payment = async (props: any) => {
  const { params } = props;
  const dataProducts = async () => {
    try {
      const data = await axios.post(
        "http://localhost:3000/api/paymentDetails",
        {
          id: params.slug,
        }
      );
      return data.data;
    } catch (error) {
      return error;
    }
  };
  const { data } = await dataProducts();

  return (
    <Navbar>
      <div
        style={{
          backgroundImage: `url(/${data.background})`,
        }}
        className="h-48 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
      >
        <div className="w-full h-full backdrop-blur-sm grid justify-center items-center">
          <Image
            className="opacity-75 p-6"
            src={`/${data.thumbnail}`}
            width={300}
            height={300}
            alt={data.thumbnail}
          />
        </div>
      </div>
      <h1 className="my-4 font-medium text-lg uppercase">{data.title}</h1>
      <FormPayment
        serverIdInput={data.serverIdInput}
        priceItem={data.priceItem}
      />
    </Navbar>
  );
};

export default Payment;
