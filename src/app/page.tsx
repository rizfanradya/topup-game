"use client";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProducts from "@/components/cardProducts";
import HomeLayout from "./(pages)/home/homeLayout";

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

export default function Home() {
  const [topupGames, setTopupGames] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/retrieveDataProducts");
        setTopupGames(data.data);
      } catch (error) {
        setTopupGames(error);
      }
    };
    fetchData();
  }, []);

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
              className="input input-bordered bg-slate-950 input-info rounded-full h-8 w-full text-xs"
              type="text"
              autoComplete="off"
              {...field}
              placeholder={"Cari Topup Game..."}
            />
          )}
        />
      </div>

      <CardProducts data={topupGames} searchValue={searchValue} />
    </HomeLayout>
  );
}
