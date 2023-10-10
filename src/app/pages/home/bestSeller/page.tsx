import HomePageLayouts from "../Layout";
import CardProducts from "@/app/components/cardProducts";

const BestSeller = () => {
  const data = [
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

  return (
    <HomePageLayouts>
      <CardProducts data={data} />
    </HomePageLayouts>
  );
};

export default BestSeller;
