"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "flowbite-react";

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
const petaSitus = [
  { href: "/", value: "Beranda" },
  { href: "/searchInvoice", value: "Daftar Pesanan" },
];
const topUpLainnya = [
  { href: "/", value: "Mobile Legend" },
  { href: "/", value: "Free Fire" },
  { href: "/", value: "Pubg Mobile" },
];
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

type DataProps = { children: ReactNode };
export default function NavbarHeader(props: DataProps) {
  const { children } = props;
  const pathname = usePathname();

  return (
    <>
      {/* navbar top start */}
      {/* <div className="bg-base-300 navbar px-6 flex justify-between items-center fixed z-10">
        <Link href={"/"} className="flex items-center font-semibold gap-2">
          <Image
            className="rounded-full"
            src={"/logo.jpg"}
            width={35}
            height={35}
            alt="logo"
          />
          <h1>Warung Top Up Store</h1>
        </Link>

        <div className="gap-6 items-center hidden md:flex">
          <Link
            className={`${
              pathname === "/" ? "active text-accent" : ""
            } hover:text-accent transition`}
            title="HOME"
            href={"/"}
          >
            <AiFillHome size="1.5em" />
          </Link>

          <Link
            className={`${
              pathname === "/searchInvoice" ? "active text-accent" : ""
            } hover:text-accent transition`}
            title="LACAK PESANAN"
            href={"/searchInvoice"}
          >
            <AiOutlineSearch size="1.7em" />
          </Link>
        </div>
      </div> */}
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo.jpg"
            className="rounded-full"
            alt="Logo"
            width={35}
            height={35}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Warung Top Up Store
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar>
      </Navbar>
      {/* navbar top end */}

      <div className="pt-20 mx-4">{children}</div>

      {/* footer start */}
      <footer className="footer py-14 grid justify-center p-4 md:px-20 bg-base-200 text-base-content">
        <div className="max-w-xl flex flex-col gap-6">
          <Link
            href={"/"}
            className="text-lg flex items-center font-semibold gap-2"
          >
            <Image
              className="rounded-full"
              src={"/logo.jpg"}
              width={40}
              height={40}
              alt="logo"
            />
            <h1>Warung Top Up Store</h1>
          </Link>

          <p className="text-white leading-6 text-[13px] font-light text-justify">
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
              <ul>
                <h3 className="footer-title text-sm">PETA SITUS</h3>
                <div className="flex flex-col gap-4 text-xs">
                  {petaSitus.map((doc) => (
                    <li key={doc.value}>
                      <Link
                        href={doc.href}
                        className="text-slate-200 hover:text-slate-500 transition"
                      >
                        {doc.value}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>

              <ul>
                <h3 className="footer-title text-sm">TOP UP LAINNYA</h3>
                <div className="flex flex-col gap-4 text-xs">
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

            <ul className="mt-8 md:mt-0">
              <h3 className="footer-title text-sm">IKUTI KAMI</h3>
              <div className="grid grid-flow-col md:grid-flow-row md:grid-cols-2 gap-3">
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

          <div className="mt-6 grid gap-4">
            <h3 className="footer-title text-sm">METODE PEMBAYARAN</h3>
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

      <footer className="footer footer-center gap-6 py-6 px-2 bg-base-300 text-base-content mb-14 md:mb-0 md:flex justify-around">
        <p className="text-sm">© 2023 Warung Top Up Store. Semua Hak Cipta</p>
        <div className="text-warning flex">
          <Link
            href={"/aboutUs"}
            className="transition hover:text-warning-content"
          >
            Tentang Kami
          </Link>
          {"|"}
          <Link
            href={"/termsOfServices"}
            className="transition hover:text-warning-content"
          >
            Syarat & Ketentuan Pengguna
          </Link>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
}
