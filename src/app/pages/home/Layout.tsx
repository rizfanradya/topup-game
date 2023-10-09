"use client";
import NavbarBottom from "@/components/NavbarBottom";
import Footer from "@/components/footer";
import NavbarTop from "@/components/navbarTop";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type DataProps = { children: ReactNode };

const HomePageLayouts = (props: DataProps) => {
  const { children } = props;
  const pathname = usePathname();

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

  const data = [
    { src: "mobile_legends.png", alt: "Mobile Legends" },
    { src: "PUBGM.jpg", alt: "PUBG Mobile" },
    { src: "MLBB-Diamond-Shop-Screen.jpg", alt: "MLBB-Diamond-Shop-Screen" },
    { src: "cara-top-up-ff.jpg", alt: "Cara Top Up FF" },
  ];

  return (
    <>
      <NavbarTop />

      <div className="w-11/12 m-auto pt-20">
        <Slider {...settings}>
          {data.map((doc, index) => (
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

        <div className="my-14">
          <ul className="border-b-2 border-slate-200 flex items-center gap-6 py-4">
            <li>
              <Link
                className={`${
                  pathname === "/"
                    ? "active text-info border-b-2 border-info"
                    : ""
                } hover:text-info transition font-medium py-[13px]`}
                href={"/"}
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/pages/home/voucher"
                    ? "active text-info border-b-2 border-info"
                    : ""
                } hover:text-info transition font-medium py-[13px]`}
                href={"/pages/home/voucher"}
              >
                Voucher Game
              </Link>
            </li>
          </ul>
          <div className="my-8">{children}</div>
        </div>
      </div>

      <Footer />
      <NavbarBottom />
    </>
  );
};

export default HomePageLayouts;
