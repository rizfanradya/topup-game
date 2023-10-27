"use client";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProducts from "@/components/cardProducts";
import HomeLayout from "../homeLayout";

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

export default function Home() {
  const [topupGames, setTopupGames] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/retrieveDataProducts");
        setTopupGames(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [topupGames]);

  const { control, watch } = useForm();
  const searchValue = watch("search", "");

  return (
    <HomeLayout>
      <div className="flex gap-4 w-full mb-4">
        <Controller
          name="search"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <input
              className="input input-bordered input-info bg-slate-950 rounded-full h-8 w-full text-xs"
              type="text"
              autoComplete="off"
              {...field}
              placeholder={"Cari Voucher..."}
            />
          )}
        />
      </div>

      <CardProducts data={topupGames} searchValue={searchValue} />
    </HomeLayout>
  );
}
