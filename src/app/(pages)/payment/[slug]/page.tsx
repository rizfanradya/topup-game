import axios from "axios";
import Image from "next/image";
import NavbarHeader from "@/app/navbarFooter";
import FormPayment from "@/components/formPayment";

export default async function Payment({ params }: any) {
  const dataProducts = async () => {
    try {
      const data = await axios.post(
        "https://topup-game-beta.vercel.app/api/paymentDetails",
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
    <NavbarHeader>
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
        dataProductItem={data.productsPriceType}
        typeValue={data.typeValue}
        codeGame={data.checkUsernameId}
      />
    </NavbarHeader>
  );
}
