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
  const [bestSeller, setBestSeller] = useState<boolean>(true);
  const [voucher, setVoucher] = useState<boolean>(false);

  const onBestSeller = () => {
    setBestSeller(true);
    setVoucher(false);
  };
  const onVoucher = () => {
    setBestSeller(false);
    setVoucher(true);
  };

  let data: ProductOrVoucherData[];
  if (bestSeller) {
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

  return (
    <div className="my-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-100">SEMUA PRODUK</h1>

        <div className="flex gap-4">
          <Controller
            name="search"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <input
                className="input input-bordered input-info"
                type="text"
                autoComplete="off"
                {...field}
                placeholder="Cari Game, Voucher, atau Pulsa..."
              />
            )}
          />
        </div>
      </div>

      <div className="border-b-2 border-slate-200 flex items-center gap-6 py-1">
        <button
          onClick={onBestSeller}
          className={`${
            bestSeller ? "text-info border-b-2 border-info" : ""
          } hover:text-info hover:border-b-2 border-info transition font-medium h-12`}
        >
          Best Seller
        </button>

        <button
          onClick={onVoucher}
          className={`${
            voucher ? "text-info border-b-2 border-info" : ""
          } hover:text-info hover:border-b-2 border-info transition font-medium h-12`}
        >
          Voucher Game
        </button>
      </div>

      <div className="my-4">
        <CardProducts data={filteredData} />
      </div>
    </div>
  );
};

export default AllGames;
