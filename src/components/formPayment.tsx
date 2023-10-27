"use client";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useState } from "react";
import createOrder from "@/utils/createOrder";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

type dataPriceItem = {
  id: string;
  nameItem: string;
  priceItemId: string;
  price: number;
};
type dataProductItem = {
  id: string;
  nameType: string;
  priceItem: dataPriceItem[];
};
type DataProps = {
  serverIdInput: boolean;
  dataProductItem: dataProductItem[];
  typeValue: string;
  codeGame: string;
};

export default function FormPayment({
  serverIdInput,
  dataProductItem,
  typeValue,
}: DataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [validatorResult, setValidatorResult] = useState<Boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const processOrder = async (e: any) => {
    const confirmPayment = confirm("Apakah anda yakin ?");
    const { produk, userId, serverId, whatsapp } = e;
    if (confirmPayment) {
      try {
        if (validator.isMobilePhone(whatsapp, ["id-ID"])) {
          const apiGamesInfoBalance = await axios.get(
            `https://v1.apigames.id/merchant/${process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID}?signature=${process.env.NEXT_PUBLIC_APIGAMES_SIGNATURE}`
          );
          const tokoVoucherInfoBalance = await axios.get(
            `https://api.tokovoucher.id/member?member_code=${process.env.NEXT_PUBLIC_TOKOVOUCHER_MEMBER_CODE}&signature=${process.env.NEXT_PUBLIC_TOKOVOUCHER_SIGNATURE}`
          );

          if (
            apiGamesInfoBalance.data.data.saldo > 10000 &&
            tokoVoucherInfoBalance.data.data.saldo > 10000
          ) {
            const process = await createOrder(produk, userId, serverId);
            console.log(process);
          } else {
            alert("Maaf sistem kami sedang sibuk, Coba lagi beberapa saat...");
            router.push(pathname);
          }
        } else {
          setValidatorResult(true);
          setTimeout(() => {
            setValidatorResult(false);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(processOrder)}>
      {validatorResult && (
        <div className="toast toast-center toast-top z-10">
          <div className="alert alert-error uppercase font-medium w-max">
            NOMOR WHATSAPP TIDAK VALID!!!
          </div>
        </div>
      )}

      <div className="grid gap-1 bg-slate-900 rounded-lg p-4 mb-4">
        <label className="font-semibold" htmlFor="userId">
          Masukkan User ID
        </label>
        <div className={`grid gap-4 ${serverIdInput ? "grid-cols-2" : ""}`}>
          <input
            className={`input input-bordered input-info bg-slate-950 h-9 text-xs text-white ${
              errors.userId && "input-error"
            }`}
            placeholder="Masukkan User ID"
            id="userId"
            type="text"
            {...register("userId", { required: true })}
          />
          {serverIdInput && (
            <input
              className={`input input-bordered input-info bg-slate-950 h-9 text-xs text-white ${
                errors.serverId && "input-error"
              }`}
              placeholder="Masukkan Server ID"
              type="text"
              {...register("serverId", { required: true })}
            />
          )}
        </div>
      </div>

      <div className="grid gap-1 bg-slate-900 rounded-lg p-4 mb-4">
        <label className="font-semibold">Pilih Nominal Top Up</label>

        {errors.priceItem && (
          <div className="alert alert-error uppercase font-semibold w-max">
            WAJIB MEMILIH JUMLAH {typeValue}
          </div>
        )}

        {dataProductItem.map((doc) => (
          <div key={doc.id}>
            <p className="uppercase font-medium text-sm mb-1">{doc.nameType}</p>
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              {doc.priceItem.map((doc) => (
                <div key={doc.id}>
                  <input
                    className="inputOption hidden"
                    id={doc.id}
                    type="radio"
                    value={doc.priceItemId.toUpperCase()}
                    {...register("produk", { required: true })}
                    onChange={(e) =>
                      setValue("produk", e.target.value.toUpperCase())
                    }
                  />

                  <label
                    className="flex flex-col p-3 cursor-pointer bg-slate-800 rounded-lg labelOption hover:ring hover:ring-sky-500 transition"
                    htmlFor={doc.id}
                  >
                    <div>
                      <p className="uppercase text-xs font-medium mb-1 text-white">
                        {doc.nameItem}
                      </p>
                      <p className="text-[10px] text-white">
                        Rp {doc.price.toLocaleString()}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-1 bg-slate-900 rounded-lg p-4 mb-4">
        <div className="grid">
          <label htmlFor="nowa" className="font-semibold">
            Nomor Whatsapp
          </label>
          <label
            htmlFor="nowa"
            className="font-light text-xs italic capitalize"
          >
            * Bukti pembelianmu akan kami kirimkan ke WhatsApp.
          </label>
        </div>

        <input
          className={`input input-bordered input-info bg-slate-950 h-9 text-xs text-white ${
            errors.whatsapp || validatorResult ? "input-error" : ""
          }`}
          id="nowa"
          type="tel"
          placeholder="Masukkan Nomor Whatsapp..."
          {...register("whatsapp", { required: true })}
        />
      </div>

      <button className="btn btn-accent w-full mb-8">PESAN SEKARANG</button>
    </form>
  );
}
