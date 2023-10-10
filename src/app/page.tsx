"use client";
import NavbarBottom from "@/components/NavbarBottom";
import Footer from "@/components/footer";
import NavbarTop from "@/components/navbarTop";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import CardProducts from "@/app/components/cardProducts";

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

const Home = () => {
  const dataCarousel = [
    { src: "mobile_legends.png", alt: "Mobile Legends" },
    { src: "PUBGM.jpg", alt: "PUBG Mobile" },
    { src: "MLBB-Diamond-Shop-Screen.jpg", alt: "MLBB-Diamond-Shop-Screen" },
    { src: "cara-top-up-ff.jpg", alt: "Cara Top Up FF" },
  ];

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

  const [bestSeller, setBestSeller] = useState<boolean>(true);
  const [voucher, setVoucher] = useState<boolean>(false);
  const [allGames, setAllGames] = useState<boolean>(false);
  const [viewCarousel, setViewCarousel] = useState<boolean>(true);

  const onHome = () => {
    setViewCarousel(true);
    setBestSeller(true);
    setVoucher(false);
    setAllGames(false);
  };
  const onVoucher = () => {
    setViewCarousel(true);
    setBestSeller(false);
    setVoucher(true);
    setAllGames(false);
  };
  const onAllGames = () => {
    setViewCarousel(false);
    setBestSeller(false);
    setVoucher(false);
    setAllGames(true);
  };

  let data: ProductOrVoucherData[];
  if (bestSeller) {
    data = dataProducts;
  } else if (voucher) {
    data = dataVoucher;
  } else {
    data = [];
  }

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

  return (
    <>
      <NavbarTop
        onAllGames={onAllGames}
        onHome={onHome}
        activeHome={viewCarousel}
        activeAllGames={allGames}
      />

      <div className="w-11/12 m-auto pt-20">
        {viewCarousel ? (
          <Slider {...settings}>
            {dataCarousel.map((doc, index) => (
              <Image
                className="h-48 md:h-72 object-cover rounded-xl"
                key={index}
                src={`/${doc.src}`}
                alt={doc.alt}
                width={1000}
                height={1000}
              />
            ))}
          </Slider>
        ) : undefined}

        <div className="my-14">
          <ul className="border-b-2 border-slate-200 flex items-center gap-6 py-1">
            <li>
              <button
                onClick={onHome}
                className={`${
                  bestSeller ? "text-info border-b-2 border-info" : ""
                } hover:text-info hover:border-b-2 border-info transition font-medium h-12`}
              >
                Best Seller
              </button>
            </li>

            <li>
              <button
                onClick={onVoucher}
                className={`${
                  voucher ? "text-info border-b-2 border-info" : ""
                } hover:text-info hover:border-b-2 border-info transition font-medium h-12`}
              >
                Voucher Game
              </button>
            </li>
          </ul>

          <div className="my-8">
            <CardProducts data={data} />
          </div>
        </div>
      </div>

      <Footer />
      <NavbarBottom />
    </>
  );
};

export default Home;
