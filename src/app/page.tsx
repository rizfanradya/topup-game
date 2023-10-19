"use client";
import Image from "next/image";
import Navbar from "./navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProductsHot from "./components/cardProductsHot";
import { Controller, useForm } from "react-hook-form";
import CardProducts from "./components/cardProducts";
import { useState } from "react";
import axios from "axios";

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};
const dataCarousel = [
  { src: "mobile_legends.png", alt: "Mobile Legends" },
  { src: "PUBGM.jpg", alt: "PUBG Mobile" },
  { src: "MLBB-Diamond-Shop-Screen.jpg", alt: "MLBB-Diamond-Shop-Screen" },
  { src: "cara-top-up-ff.jpg", alt: "Cara Top Up FF" },
];
const dataProducts = [
  {
    id: "1",
    data: "Mobile Legends",
    dev: "Moontoon",
    bg: "products/mobileLegends/mobileLegends.jpg",
    thumb: "products/mobileLegends/mobileLegendsThumb.png",
    href: "/payment/mobile-legends",
  },
  {
    id: "2",
    data: "Free Fire",
    dev: "Garena",
    bg: "products/freefire/freefire.jpg",
    thumb: "products/freefire/freefirethumb.png",
    href: "/payment/free-fire",
  },
  {
    id: "3",
    data: "Pubg Mobile",
    dev: "UC Indonesia",
    bg: "products/pubg/pubg.jpeg",
    thumb: "products/pubg/pubgthumb.png",
    href: "/payment/pubg-mobile",
  },
  {
    id: "4",
    data: "Genshin Impact",
    dev: "Hoyoverse",
    bg: "products/genshinimpact/genshinimpact.jpg",
    thumb: "products/genshinimpact/genshinimpactthumb.png",
    href: "/payment/genshin-impact",
  },
  {
    id: "5",
    data: "Call of Duty Mobile",
    dev: "Garena",
    bg: "products/callofdutymobile/callofdutymobile.jpg",
    thumb: "products/callofdutymobile/callofdutymobilethumb.png",
    href: "/payment/cod-mobile",
  },
  {
    id: "6",
    data: "Valorant",
    dev: "Riot Games",
    bg: "products/valorant/valorant.jpg",
    thumb: "products/valorant/valorantthumb.png",
    href: "/payment/valorant",
  },
];
const dataVoucher = [
  {
    id: "7",
    data: "Point Blank",
    dev: "Zepetto",
    bg: "voucher/pointblank/pointblank.jpeg",
    thumb: "voucher/pointblank/pointblankthumb.png",
    href: "/payment/point-blank",
  },
  {
    id: "8",
    data: "Steam Wallet",
    dev: "Steam Indonesia",
    bg: "voucher/steam/steam.jpg",
    thumb: "voucher/steam/steamthumb.png",
    href: "/payment/steam-wallet",
  },
  {
    id: "9",
    data: "PlayStation Network",
    dev: "PlayStation",
    bg: "voucher/playstation/playstation.jpg",
    thumb: "voucher/playstation/playstationthumb.png",
    href: "/payment/playstation-network",
  },
  {
    id: "10",
    data: "Google Play",
    dev: "Playstore",
    bg: "voucher/googleplay/googleplay.jpg",
    thumb: "voucher/googleplay/googleplaythumb.png",
    href: "/payment/google-play",
  },
];

type Data = {
  id: string;
  data: string;
  dev: string;
  bg: string;
  thumb: string;
  href: string;
};
type ProductOrVoucherData = Data;

const Main = () => {
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

  let data: ProductOrVoucherData[];
  if (games) {
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

  const hotGames = dataProducts.slice(0, 4);
  const hotVoucher = dataVoucher.slice(0, 4);
  const popular = [...hotGames, ...hotVoucher];

  let showData: any;
  if (filteredData.length) {
    showData = <CardProducts data={filteredData} />;
  } else if (filteredData.length === 0) {
    showData = (
      <div className="font-semibold tracking-wider alert alert-info">
        MAAF, PRODUK TIDAK DITEMUKAN!
      </div>
    );
  }

  // axios
  //   .get(
  //     `https://v1.apigames.id/merchant/${process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID}?signature=${process.env.NEXT_PUBLIC_APIGAMES_SIGNATURE}`
  //   )
  //   .then((res) => console.log(res))
  //   .catch((error) => console.log(error))
  //   .finally(() => console.log("selesai"));

  // axios
  //   .get(
  //     `https://v1.apigames.id/merchant/${process.env.NEXT_PUBLIC_APIGAMES_MERCHANT_ID}/cek-username/mobilelegend?user_id=88148365612493&signature=${process.env.NEXT_PUBLIC_APIGAMES_SIGNATURE}`
  //   )
  //   .then((res) => console.log(res))
  //   .catch((error) => console.log(error))
  //   .finally(() => console.log("selesai"));

  return (
    <Navbar>
      <Slider {...settings}>
        {dataCarousel.map((doc, index) => (
          <Image
            className="h-44 md:h-64 object-cover rounded-xl mb-4"
            key={index}
            src={`/${doc.src}`}
            alt={doc.alt}
            width={1000}
            height={1000}
          />
        ))}
      </Slider>

      <div className="mb-4">
        <h1 className="font-medium text-slate-100">🔥 POPULER</h1>
        <CardProductsHot data={popular} />
      </div>

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

      <div className="my-4">{showData}</div>
    </Navbar>
  );
};

export default Main;
