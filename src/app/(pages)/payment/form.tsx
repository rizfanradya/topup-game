"use client";
import { useForm } from "react-hook-form";

type priceItem = {
  id: string;
  nameItem: string;
  priceItemId: string;
  price: number;
};
type DataProps = { serverIdInput: boolean; priceItem: priceItem[] };

export default function FormPayment({ serverIdInput, priceItem }: DataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createOrder = async (e: any) => {
    // axios.post("/api/createOrder", {});
    console.log(e);
  };

  return (
    <form
      onSubmit={handleSubmit(createOrder)}
      className="bg-base-300 rounded-lg p-4 grid gap-4"
    >
      <div className="grid gap-2">
        <label className="text-lg font-semibold" htmlFor="userId">
          Masukkan User ID
        </label>
        <div className="grid grid-flow-col gap-4">
          <input
            className={`input input-bordered input-info ${
              errors.userId && "input-error"
            }`}
            placeholder="Masukkan User ID"
            id="userId"
            type="text"
            {...register("userId", { required: true })}
          />
          {serverIdInput ? (
            <input
              className={`input input-bordered input-info ${
                errors.serverId && "input-error"
              }`}
              placeholder="Masukkan Server ID"
              type="text"
              {...register("serverId", { required: true })}
            />
          ) : undefined}
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-lg font-semibold">Pilih Nominal Top Up</label>
        <div className="grid gap-2">
          {priceItem.map((doc) => (
            <div key={doc.id}>
              <input
                className="inputOption hidden"
                id={doc.id}
                type="radio"
                name="radio"
              />
              <label
                className={`flex flex-col p-4 border-gray-100 cursor-pointer bg-base-100 rounded-xl labelOption`}
                htmlFor={doc.id}
              >
                <div>
                  <p>{doc.nameItem}</p>
                  <p>{doc.price}</p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-accent">PESAN SEKARANG</button>
    </form>
  );
}
