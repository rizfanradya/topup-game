import CardProducts from "@/app/components/cardProducts";
import HomePageLayouts from "../Layout";

const Voucher = () => {
  const data = [
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

  return (
    <HomePageLayouts>
      <CardProducts data={data} />
    </HomePageLayouts>
  );
};

export default Voucher;
