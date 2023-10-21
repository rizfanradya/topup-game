"use client";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import NavbarHeader from "@/app/navbar/navbarHeader";
import HomeCarousel from "./components/carousel";
import CardProductsPopular from "./components/cardProductsPopular";
import CardProducts from "./components/cardProducts";

const dataProducts = [
  {
    id: "1",
    title: "Mobile Legends",
    dev: "Moontoon",
    bg: "products/mobileLegends/mobileLegends.jpg",
    thumb: "products/mobileLegends/mobileLegendsThumb.png",
    href: "/payment/mobile-legends",
  },
  {
    id: "2",
    title: "Free Fire",
    dev: "Garena",
    bg: "products/freefire/freefire.jpg",
    thumb: "products/freefire/freefirethumb.png",
    href: "/payment/free-fire",
  },
  {
    id: "3",
    title: "Pubg Mobile",
    dev: "UC Indonesia",
    bg: "products/pubg/pubg.jpeg",
    thumb: "products/pubg/pubgthumb.png",
    href: "/payment/pubg-mobile",
  },
  {
    id: "4",
    title: "Genshin Impact",
    dev: "Hoyoverse",
    bg: "products/genshinimpact/genshinimpact.jpg",
    thumb: "products/genshinimpact/genshinimpactthumb.png",
    href: "/payment/genshin-impact",
  },
  {
    id: "5",
    title: "Call of Duty Mobile",
    dev: "Garena",
    bg: "products/callofdutymobile/callofdutymobile.jpg",
    thumb: "products/callofdutymobile/callofdutymobilethumb.png",
    href: "/payment/cod-mobile",
  },
  {
    id: "6",
    title: "Valorant",
    dev: "Riot Games",
    bg: "products/valorant/valorant.jpg",
    thumb: "products/valorant/valorantthumb.png",
    href: "/payment/valorant",
  },
];
const dataVoucher = [
  {
    id: "7",
    title: "Point Blank",
    dev: "Zepetto",
    bg: "voucher/pointblank/pointblank.jpeg",
    thumb: "voucher/pointblank/pointblankthumb.png",
    href: "/payment/point-blank",
  },
  {
    id: "8",
    title: "Steam Wallet",
    dev: "Steam Indonesia",
    bg: "voucher/steam/steam.jpg",
    thumb: "voucher/steam/steamthumb.png",
    href: "/payment/steam-wallet",
  },
  {
    id: "9",
    title: "PlayStation Network",
    dev: "PlayStation",
    bg: "voucher/playstation/playstation.jpg",
    thumb: "voucher/playstation/playstationthumb.png",
    href: "/payment/playstation-network",
  },
  {
    id: "10",
    title: "Google Play",
    dev: "Playstore",
    bg: "voucher/googleplay/googleplay.jpg",
    thumb: "voucher/googleplay/googleplaythumb.png",
    href: "/payment/google-play",
  },
];

type Data = {
  id: string;
  title: string;
  dev: string;
  bg: string;
  thumb: string;
  href: string;
};

export default function Home() {
  const [games, setGames] = useState<boolean>(true);
  const [voucher, setVoucher] = useState<boolean>(false);
  const [pulsa, setPulsa] = useState<boolean>(false);

  const onBestSeller = () => {
    setGames(true);
    setVoucher(false);
    setPulsa(false);
  };
  const onVoucher = () => {
    setGames(false);
    setVoucher(true);
    setPulsa(false);
  };
  const onPulsa = () => {
    setGames(false);
    setVoucher(false);
    setPulsa(true);
  };

  let placeholder: string;
  if (games) {
    placeholder = "Cari Top Up Game...";
  } else if (voucher) {
    placeholder = "Cari Voucher...";
  } else if (pulsa) {
    placeholder = "Cari Pulsa...";
  } else {
    placeholder = "";
  }

  const [topupGames, setTopupGames] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("api/retrieveDataProducts");
        setTopupGames(data.data);
      } catch (error) {
        setTopupGames(error);
      }
    };
    fetchData();
  }, [topupGames]);

  let data: any;
  if (games) {
    data = topupGames;
  } else if (voucher) {
    data = dataVoucher;
  } else {
    data = [];
  }

  const { control, watch } = useForm();
  const searchValue = watch("search", "");

  const hotGames = topupGames.slice(0, 4);
  const hotVoucher = dataVoucher.slice(0, 4);
  const popular = [...hotGames, ...hotVoucher];

  return (
    <NavbarHeader>
      <HomeCarousel />
      <CardProductsPopular data={popular} />

      <div className="flex gap-4 w-full mb-4">
        <Controller
          name="search"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <input
              className="input input-bordered input-info rounded-full h-8 w-full text-xs"
              type="text"
              autoComplete="off"
              {...field}
              placeholder={placeholder}
            />
          )}
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBestSeller}
            className={`border py-2 px-3 rounded-full transition text-white text-[10px] ${
              games
                ? "border-sky-500 bg-sky-500"
                : "border-slate-600 hover:bg-slate-600"
            }`}
          >
            Top Up Game
          </button>

          <button
            onClick={onVoucher}
            className={`border py-2 px-3 rounded-full transition text-white text-[10px] ${
              voucher
                ? "border-sky-500 bg-sky-500"
                : "border-slate-600 hover:bg-slate-600"
            }`}
          >
            Voucher
          </button>

          <button
            onClick={onPulsa}
            className={`border py-2 px-3 rounded-full transition text-white text-[10px] ${
              pulsa
                ? "border-sky-500 bg-sky-500"
                : "border-slate-600 hover:bg-slate-600"
            }`}
          >
            Pulsa
          </button>
        </div>
      </div>

      <CardProducts data={data} searchValue={searchValue} />
    </NavbarHeader>
  );
}
