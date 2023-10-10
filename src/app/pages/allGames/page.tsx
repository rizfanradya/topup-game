"use client";
import CardProducts from "@/app/components/cardProducts";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const dataProducts = [
  {
    data: "Mobile Legends",
    dev: "Moontoon",
    bg: "products/mobileLegends/mobileLegends.jpg",
    thumb: "products/mobileLegends/mobileLegendsThumb.png",
    href: "/",
  },
  {
    data: "Free Fire",
    dev: "Garena",
    bg: "products/freefire/freefire.jpg",
    thumb: "products/freefire/freefirethumb.png",
    href: "/",
  },
  {
    data: "Pubg Mobile",
    dev: "UC Indonesia",
    bg: "products/pubg/pubg.jpeg",
    thumb: "products/pubg/pubgthumb.png",
    href: "/",
  },
  {
    data: "Genshin Impact",
    dev: "Hoyoverse",
    bg: "products/genshinimpact/genshinimpact.jpg",
    thumb: "products/genshinimpact/genshinimpactthumb.png",
    href: "/",
  },
  {
    data: "Call of Duty Mobile",
    dev: "Garena",
    bg: "products/callofdutymobile/callofdutymobile.jpg",
    thumb: "products/callofdutymobile/callofdutymobilethumb.png",
    href: "/",
  },
  {
    data: "Valorant",
    dev: "Riot Games",
    bg: "products/valorant/valorant.jpg",
    thumb: "products/valorant/valorantthumb.png",
    href: "/",
  },
];
const dataVoucher = [
  {
    data: "Point Blank",
    dev: "Zepetto",
    bg: "voucher/pointblank/pointblank.jpeg",
    thumb: "voucher/pointblank/pointblankthumb.png",
    href: "/",
  },
  {
    data: "Steam Wallet",
    dev: "Steam Indonesia",
    bg: "voucher/steam/steam.jpg",
    thumb: "voucher/steam/steamthumb.png",
    href: "/",
  },
  {
    data: "PlayStation Network",
    dev: "PlayStation",
    bg: "voucher/playstation/playstation.jpg",
    thumb: "voucher/playstation/playstationthumb.png",
    href: "/",
  },
  {
    data: "Google Play",
    dev: "Playstore",
    bg: "voucher/googleplay/googleplay.jpg",
    thumb: "voucher/googleplay/googleplaythumb.png",
    href: "/",
  },
];

type ProductData = {
  data: string;
  dev: string;
  bg: string;
  thumb: string;
  href: string;
};
type VoucherData = {
  data: string;
  dev: string;
  bg: string;
  thumb: string;
  href: string;
};
type ProductOrVoucherData = ProductData | VoucherData;

const AllGames = () => {
  const [allGames, setAllGames] = useState<boolean>(true);
  const [voucher, setVoucher] = useState<boolean>(false);
  const [pulsa, setPulsa] = useState<boolean>(false);

  const onAllGames = () => {
    setAllGames(true);
    setVoucher(false);
  };
  const onVoucher = () => {
    setAllGames(false);
    setVoucher(true);
  };

  let data: ProductOrVoucherData[];
  if (allGames) {
    data = dataProducts;
  } else if (voucher) {
    data = dataVoucher;
  } else {
    data = [];
  }

  const { control, watch } = useForm();
  const searchValue = watch("search", "");
  const filteredData = data.filter((item) => {
    const { data, dev } = item;
    const searchKeyword = searchValue.toLowerCase();
    return (
      data.toLowerCase().includes(searchKeyword) ||
      dev.toLowerCase().includes(searchKeyword)
    );
  });

  let showData: any;
  if (filteredData.length) {
    showData = <CardProducts data={filteredData} />;
  } else if (filteredData.length === 0) {
    showData = (
      <div className="font-semibold tracking-wider alert alert-info">
        MAAF, PRODUK YANG ANDA CARI TIDAK ADA!
      </div>
    );
  }

  let placeholder: string;
  if (allGames) {
    placeholder = "Cari Game...";
  } else if (voucher) {
    placeholder = "Cari Voucher...";
  } else if (pulsa) {
    placeholder = "Cari Pulsa...";
  } else {
    placeholder = "";
  }

  return (
    <>
      <div className="flex flex-col items-center md:justify-between gap-6 justify-center md:gap-0 md:flex-row">
        <h1 className="text-lg font-medium text-slate-100">SEMUA PRODUK</h1>

        <div className="flex gap-4 w-full md:max-w-xs">
          <Controller
            name="search"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <input
                className="input input-bordered input-info rounded-full h-9 w-full"
                type="text"
                autoComplete="off"
                {...field}
                placeholder={placeholder}
              />
            )}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={onAllGames}
          className={`border px-3 py-2 rounded-full transition text-white text-xs ${
            allGames
              ? "border-sky-500 bg-sky-500"
              : "border-slate-600 hover:bg-slate-600"
          }`}
        >
          Best Seller
        </button>

        <button
          onClick={onVoucher}
          className={`border px-3 py-2 rounded-full transition text-white text-xs ${
            voucher
              ? "border-sky-500 bg-sky-500"
              : "border-slate-600 hover:bg-slate-600"
          }`}
        >
          Voucher Game
        </button>
      </div>

      <div className="my-4 m-auto">{showData}</div>
    </>
  );
};

export default AllGames;
