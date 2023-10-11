"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProducts from "@/app/components/cardProducts";
import Image from "next/image";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CardProductsHot from "@/app/components/cardProductsHot";

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
const dataCarousel = [
  { src: "mobile_legends.png", alt: "Mobile Legends" },
  { src: "PUBGM.jpg", alt: "PUBG Mobile" },
  { src: "MLBB-Diamond-Shop-Screen.jpg", alt: "MLBB-Diamond-Shop-Screen" },
  { src: "cara-top-up-ff.jpg", alt: "Cara Top Up FF" },
];

const HomePage = () => {
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
    placeholder = "Cari Voucher Game...";
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

  let limitedData = data.slice(0, 6);

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

  return (
    <>
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
        <CardProductsHot data={limitedData} />
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
            Voucher Game
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
    </>
  );
};

export default HomePage;
