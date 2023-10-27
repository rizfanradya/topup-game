"use client";
import NavbarHeader from "@/app/navbarFooter";
import { Controller, useForm } from "react-hook-form";
import { MdPayment } from "react-icons/md";

export default function SearchInvoice() {
  const data = [
    {
      id: +6281379892960,
      img: "products/pubg/pubg.jpeg",
      product: "pubg mobile",
      price: "Rp 150.000",
      payment: "indomaret",
      date: "12/09/2023",
      status: "berhasil",
    },
    {
      id: +6288747482005,
      img: "voucher/steam/steam.jpg",
      product: "steam wallet",
      price: "Rp 250.000",
      payment: "alfamart",
      date: "1/09/2023",
      status: "gagal",
    },
    {
      id: +6287824898643,
      img: "products/freefire/freefire.jpg",
      product: "free fire",
      price: "Rp 50.000",
      payment: "dana",
      date: "11/09/2023",
      status: "expired",
    },
    {
      id: +6281379892960,
      img: "products/valorant/valorant.jpg",
      product: "valorant",
      price: "Rp 550.000",
      payment: "ovo",
      date: "21/09/2023",
      status: "proses",
    },
    {
      id: +6281379892960,
      img: "products/valorant/valorant.jpg",
      product: "valorant",
      price: "Rp 550.000",
      payment: "ovo",
      date: "20/09/2023",
      status: "proses",
    },
    {
      id: +6287824898643,
      img: "voucher/googleplay/googleplay.jpg",
      product: "google play",
      price: "Rp 350.000",
      payment: "mandiri",
      date: "19/09/2023",
      status: "berhasil",
    },
    {
      id: +6212345678912,
      img: "voucher/pointblank/pointblank.jpeg",
      product: "point blank",
      price: "Rp 90.000",
      payment: "shopeepay",
      date: "13/08/2023",
      status: "gagal",
    },
  ];

  const statusBadge = (status: string) => {
    switch (status) {
      case "berhasil":
        return "badge-success";
      case "gagal":
        return "badge-error";
      case "expired":
        return "badge-warning";
      case "proses":
        return "badge-info";
      default:
        return "badge-outline";
    }
  };

  const { control, watch } = useForm();
  const telepon = watch("telepon", "");

  const convertDateToValidFormat = (dateString: string) => {
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${month} ${day}, ${year}`;
    }
    return dateString;
  };

  const filteredData = data
    .filter((docData) => docData.id === +telepon)
    .sort(
      (a, b) =>
        (new Date(convertDateToValidFormat(b.date)) as any) -
        (new Date(convertDateToValidFormat(a.date)) as any)
    );

  return (
    <NavbarHeader>
      <div className="form-control w-full flex flex-col gap-2 pb-4">
        <label htmlFor="lacakpesanan" className="font-medium text-sm">
          LACAK PESANAN DENGAN NOMOR TELEPON
        </label>

        <Controller
          name="telepon"
          control={control}
          defaultValue={"+62"}
          render={({ field }) => (
            <input
              {...field}
              id="lacakpesanan"
              type="text"
              placeholder="Masukkan nomor handphonemu cth:(+628123456789)"
              className="input input-bordered rounded-full w-full h-10 bg-slate-950"
            />
          )}
        />
      </div>

      <div className="mb-14 px-4 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.length === 0 ? (
          <div className="alert alert-error font-semibold">
            MAAF DATA TIDAK DITEMUKAN!!
          </div>
        ) : (
          filteredData.map((doc, index) => (
            <div
              key={index}
              className="border border-slate-400 flex p-2 rounded-xl items-center justify-between"
            >
              <div className="flex gap-1 items-center">
                <div
                  style={{
                    backgroundImage: `url(/${doc.img})`,
                  }}
                  className="bg-cover bg-center bg-no-repeat rounded-lg w-14 h-14"
                ></div>

                <div className="flex flex-col justify-between gap-1 p-1">
                  <h2 className="font-medium text-sm text-white uppercase">
                    {doc.product}
                  </h2>
                  <p className="text-sm font-medium">{doc.price}</p>
                  <p className="flex items-center gap-1 font-medium text-xs uppercase">
                    <MdPayment size="1.5em" className="text-yellow-300" />{" "}
                    {doc.payment}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-around h-full p-1">
                <div
                  className={`badge ${statusBadge(
                    doc.status
                  )} text-xs font-semibold uppercase`}
                >
                  {doc.status}
                </div>
                <p className="text-xs">{doc.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </NavbarHeader>
  );
}
