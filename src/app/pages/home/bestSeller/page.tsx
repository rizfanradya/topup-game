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
  ];

  return (
    <HomePageLayouts>
      <div className="flex justify-center gap-6">
        {data.map((doc, index) => (
          <Link key={index} href={doc.href}>
            <div
              style={{
                backgroundImage: `url(/products/${doc.bg})`,
              }}
              className="bg-cover bg-center bg-no-repeat rounded-lg w-44 h-60 flex items-center justify-center overflow-hidden group hover:ring-4 ring-slate-100 transition"
            >
              <Image
                className="w-4/5 opacity-50 group-hover:hidden"
                src={`/products/${doc.thumb}`}
                width={250}
                height={250}
                alt={doc.bg}
              />
              <div className="hidden flex-col justify-end gap-2 backdrop-blur p-4 w-full h-full group-hover:flex">
                <Image
                  className="rounded-full m-auto w-20"
                  src={"/logo.jpg"}
                  width={100}
                  height={100}
                  alt="Logo"
                />
                <p className="font-semibold">{doc.data}</p>
                <p>{doc.dev}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </HomePageLayouts>
  );
};

export default BestSeller;
