import Link from "next/link";
import Image from "next/image";
import HomePageLayouts from "../Layout";

const BestSeller = () => {
  const data = [
    {
      data: "Mobile Legends",
      dev: "Moontoon",
      bg: "mobileLegends/mobileLegends.jpg",
      thumb: "mobileLegends/mobileLegendsThumb.png",
      href: "/",
    },
    {
      data: "Free Fire",
      dev: "Garena",
      bg: "freefire/freefire.jpg",
      thumb: "freefire/freefirethumb.png",
      href: "/",
    },
    {
      data: "Pubg Mobile",
      dev: "UC Indonesia",
      bg: "pubg/pubg.jpeg",
      thumb: "pubg/pubgthumb.png",
      href: "/",
    },
    {
      data: "Genshin Impact",
      dev: "Hoyoverse",
      bg: "genshinimpact/genshinimpact.jpg",
      thumb: "genshinimpact/genshinimpactthumb.png",
      href: "/",
    },
    {
      data: "Call of Duty Mobile",
      dev: "Garena",
      bg: "callofdutymobile/callofdutymobile.jpg",
      thumb: "callofdutymobile/callofdutymobilethumb.png",
      href: "/",
    },
    {
      data: "Valorant",
      dev: "Riot Games",
      bg: "valorant/valorant.jpg",
      thumb: "valorant/valorantthumb.png",
      href: "/",
    },
  ];

  return (
    <HomePageLayouts>
      <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
        {data.map((doc, index) => (
          <Link key={index} href={doc.href}>
            <div
              style={{
                backgroundImage: `url(/products/${doc.bg})`,
              }}
              className="bg-cover bg-center bg-no-repeat rounded-lg w-[105px] h-36 md:w-40 md:h-56 flex items-center justify-center overflow-hidden group hover:ring-4 ring-slate-100 transition"
            >
              <Image
                className="w-4/5 opacity-75 group-hover:hidden"
                src={`/products/${doc.thumb}`}
                width={250}
                height={250}
                alt={doc.bg}
              />
              <div className="hidden flex-col justify-end gap-2 backdrop-blur p-2 w-full h-full group-hover:flex">
                <Image
                  className="rounded-full m-auto w-12 md:w-20"
                  src={"/logo.jpg"}
                  width={100}
                  height={100}
                  alt="Logo"
                />
                <p className="font-semibold text-slate-50 text-xs md:text-base">
                  {doc.data}
                </p>
                <p className="text-slate-100 text-[10px] md:text-base">
                  {doc.dev}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </HomePageLayouts>
  );
};

export default BestSeller;
