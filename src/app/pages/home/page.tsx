"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProducts from "@/app/components/cardProducts";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <>
      <Slider {...settings}>
        {dataCarousel.map((doc, index) => (
          <Image
            className="h-44 md:h-64 object-cover rounded-xl"
            key={index}
            src={`/${doc.src}`}
            alt={doc.alt}
            width={1000}
            height={1000}
          />
        ))}
      </Slider>

      <div className="my-6">
        <div className="flex items-center gap-2">
          <button
            onClick={onBestSeller}
            className={`border py-2 px-3 rounded-full transition text-white text-xs ${
              bestSeller
                ? "border-sky-500 bg-sky-500"
                : "border-slate-600 hover:bg-slate-600"
            }`}
          >
            Best Seller
          </button>

          <button
            onClick={onVoucher}
            className={`border py-2 px-3 rounded-full transition text-white text-xs ${
              voucher
                ? "border-sky-500 bg-sky-500"
                : "border-slate-600 hover:bg-slate-600"
            }`}
          >
            Voucher Game
          </button>
        </div>

        <div className="my-4">
          <CardProducts data={data} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
