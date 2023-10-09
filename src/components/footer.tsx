"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const metodePembayaran = [
    { src: "ovo" },
    { src: "dana" },
    { src: "shopeepay" },
    { src: "gopay" },
    { src: "linkaja" },
    { src: "qris" },
    { src: "indomaret" },
    { src: "alfamart" },
    { src: "permataBank" },
    { src: "mandiri" },
    { src: "bni" },
    { src: "bri" },
  ];

  const petaSitus = [
    { href: "/", value: "Beranda" },
    { href: "/pages/allGames", value: "Semua Game" },
    { href: "/pages/searchInvoice", value: "Daftar Pesanan" },
  ];

  const topUpLainnya = [
    { href: "/", value: "Mobile Legend" },
    { href: "/", value: "Free Fire" },
    { href: "/", value: "Pubg Mobile" },
  ];

  return (
    <>
      <footer className="footer py-14 px-4 md:px-20 lg:px-28 bg-base-200 text-base-content">
        <div className="max-w-xl flex flex-col gap-6">
          <Link
            className="text-2xl flex items-center font-semibold gap-2"
            href={"/"}
          >
            <Image
              className="rounded-full"
              src={"/logo.jpg"}
              width={50}
              height={50}
              alt="logo"
            />
            <h1>Warung Top Up Store</h1>
          </Link>

          <p className="text-white text-lg">
            Top Up Game Favorit Kamu Di Warung Top Up Store Agar Main Game
            Semakin Seru. Pengiriman Cepat Dan Berbagai Methode Pembayaran Yang
            Lengkap. Tersedia Berbagai Macam Game Populer Seperti Mobile
            Legends, PUBG Mobile, Valorant, Dragon Nest 2, Free Fire, Garena
            Undawn, Ragnarok Origin, Genshin Impact, Seal M Sea, Ace Racer,
            Tower Of Fantasy, Wild Rift, Arena Of Valor, Call Of Duty Mobile,
            Sausage Man Dan Berbagai Game Lainnya Yang Tidak Kalah Seru Untuk
            Kamu Mainkan.
          </p>
        </div>

        <div>
          <div className="md:flex gap-6">
            <div className="flex gap-6">
              <ul className="text-lg">
                <h3 className="footer-title">PETA SITUS</h3>
                <div className="flex flex-col gap-4">
                  {petaSitus.map((doc) => (
                    <li key={doc.value}>
                      <Link
                        className="text-slate-200 hover:text-slate-500 transition"
                        href={doc.href}
                      >
                        {doc.value}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>

              <ul className="text-lg">
                <h3 className="footer-title">TOP UP LAINNYA</h3>
                <div className="flex flex-col gap-4">
                  {topUpLainnya.map((doc) => (
                    <li key={doc.value}>
                      <Link
                        className="text-slate-200 hover:text-slate-500 transition"
                        href={doc.href}
                      >
                        {doc.value}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>

            <ul className="text-lg mt-8 md:mt-0">
              <h3 className="footer-title">IKUTI KAMI</h3>
              <div className="flex md:grid md:grid-cols-2 gap-3">
                <li className="bg-slate-900 transition rounded-full w-12 h-12 btn-secondary btn-outline flex items-center justify-center">
                  <Link
                    href={
                      "https://instagram.com/warungtopupstore_?igshid=MzRlODBiNWFlZA=="
                    }
                    target="_blank"
                  >
                    <AiOutlineInstagram size="1.8em" />
                  </Link>
                </li>
                <li className="bg-slate-900 transition rounded-full w-12 h-12 btn-accent btn-outline flex items-center justify-center">
                  <Link
                    href={"http://tiktok.com/@bigetron.esports09"}
                    target="_blank"
                  >
                    <FaTiktok size="1.5em" />
                  </Link>
                </li>
                <li className="bg-slate-900 transition rounded-full w-12 h-12 btn-error btn-outline flex items-center justify-center">
                  <Link
                    href={
                      "https://youtube.com/@GADGETRIVIEW?si=_BCcatEqQzPyn5aT"
                    }
                    target="_blank"
                  >
                    <AiFillYoutube size="1.5em" />
                  </Link>
                </li>
                <li className="bg-slate-900 transition rounded-full w-12 h-12 btn-outline flex items-center justify-center">
                  <Link href={"mailto:faelftauraeca@gmail.com"} target="_blank">
                    <GrMail size="1.5em" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="text-lg mt-6 grid gap-4">
            <h3 className="footer-title">METODE PEMBAYARAN</h3>
            <div className="max-w-md overflow-hidden">
              <Slider {...settings}>
                {metodePembayaran.map((doc) => (
                  <div className="h-10" key={doc.src}>
                    <Image
                      className="px-2 h-full"
                      src={`/metodePembayaran/${doc.src}.svg`}
                      width={100}
                      height={100}
                      alt={doc.src}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center gap-6 py-6 px-2 bg-base-300 text-base-content mb-14 md:mb-0 md:text-base md:flex justify-around">
        <p>© 2023 Warung Top Up Store. Semua Hak Cipta</p>
        <div className="text-warning flex">
          <Link
            className="transition hover:text-warning-content"
            href={"/pages/aboutUs"}
          >
            Tentang Kami
          </Link>
          {"|"}
          <Link
            className="transition hover:text-warning-content"
            href={"/pages/termsOfServices"}
          >
            Syarat & Ketentuan Pengguna
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;