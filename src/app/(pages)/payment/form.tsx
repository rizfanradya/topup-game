"use client";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useState } from "react";
import axios from "axios";

type priceItem = {
  id: string;
  nameItem: string;
  priceItemId: string;
  price: number;
};
type DataProps = {
  serverIdInput: boolean;
  priceItem: priceItem[];
  typeValue: string;
  codeGame: string;
};

export default function FormPayment({
  serverIdInput,
  priceItem,
  typeValue,
  codeGame,
}: DataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [validatorResult, setValidatorResult] = useState<Boolean>(false);

  const createOrder = async (e: any) => {
    try {
      if (validator.isMobilePhone(e.whatsapp, ["id-ID"])) {
        console.log(e);
      } else {
        setValidatorResult(true);
        setTimeout(() => {
          setValidatorResult(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createOrder)}
      className="bg-base-300 rounded-lg p-4 grid gap-4 mb-8"
    >
      <div className="grid gap-1">
        <label className="font-semibold" htmlFor="userId">
          Masukkan User ID
        </label>
        <div className={`grid gap-4 ${serverIdInput ? "grid-cols-2" : ""}`}>
          <input
            className={`input input-bordered input-info h-9 text-xs text-white ${
              errors.userId && "input-error"
            }`}
            placeholder="Masukkan User ID"
            id="userId"
            type="text"
            {...register("userId", { required: true })}
          />
          {serverIdInput ? (
            <input
              className={`input input-bordered input-info h-9 text-xs text-white ${
                errors.serverId && "input-error"
              }`}
              placeholder="Masukkan Server ID"
              type="text"
              {...register("serverId", { required: true })}
            />
          ) : undefined}
        </div>
      </div>

      <div className="grid gap-1">
        <label className="font-semibold">Pilih Nominal Top Up</label>
        {errors.priceItem && (
          <div className="alert alert-error uppercase font-semibold w-max">
            WAJIB MEMILIH JUMLAH {typeValue}
          </div>
        )}
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {priceItem.map((doc) => (
            <div key={doc.id}>
              <input
                className="inputOption hidden"
                id={doc.id}
                type="radio"
                value={doc.priceItemId.toUpperCase()}
                {...register("priceItem", { required: true })}
                onChange={(e) =>
                  setValue("priceItem", e.target.value.toUpperCase())
                }
              />

              <label
                className="flex flex-col p-4 cursor-pointer bg-base-100 rounded-xl labelOption hover:ring hover:ring-sky-500 transition"
                htmlFor={doc.id}
              >
                <div>
                  <p className="uppercase text-xs font-medium mb-1">
                    {doc.nameItem}
                  </p>
                  <p className="text-[10px]">Rp {doc.price.toLocaleString()}</p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-1">
        <div className="grid">
          <label htmlFor="nowa" className="font-semibold">
            Nomor Whatsapp
          </label>
          <label htmlFor="nowa" className="font-light text-xs italic">
            * Bukti pembelianmu akan kami kirimkan ke WhatsApp.
          </label>
        </div>

        {validatorResult && (
          <div className="toast toast-center toast-top z-10">
            <div className="alert alert-error uppercase font-medium w-max">
              NOMOR WHATSAPP TIDAK VALID!!!
            </div>
          </div>
        )}

        <input
          className={`input input-bordered input-info h-9 text-xs text-white ${
            errors.whatsapp || validatorResult ? "input-error" : ""
          }`}
          id="nowa"
          type="tel"
          placeholder="Masukkan Nomor Whatsapp..."
          {...register("whatsapp", { required: true })}
        />
      </div>

      <button className="btn btn-accent">PESAN SEKARANG</button>
    </form>
  );
}
