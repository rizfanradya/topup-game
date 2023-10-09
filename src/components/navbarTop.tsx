"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";

const NavbarTop = () => {
  const pathname = usePathname();

  return (
    <div className="bg-base-300 navbar">
      <div className="w-11/12 m-auto flex justify-between items-center">
        <Link
          className="text-xl flex items-center font-semibold gap-2"
          href={"/"}
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

        <ul className="gap-6 items-center hidden md:flex">
          <li>
            <Link
              className={`${
                pathname === "/" ? "active text-accent" : ""
              } hover:text-accent transition`}
              href={"/"}
              title="HOME"
            >
              <AiFillHome size="1.5em" />
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/pages/allGames" ? "active text-accent" : ""
              } hover:text-accent transition`}
              href={"/pages/allGames"}
              title="SEMUA GAME"
            >
              <GiGamepad size="2em" />
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/pages/searchInvoice" ? "active text-accent" : ""
              } hover:text-accent transition`}
              href={"/pages/searchInvoice"}
              title="LACAK PESANAN"
            >
              <AiOutlineSearch size="1.7em" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
