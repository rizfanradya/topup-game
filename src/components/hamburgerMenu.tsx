"use client";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HamburgerMenu() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<boolean>();

  const menuHandle = () => {
    setMenu(!menu);
  };
  return (
    <>
      <ul
        className={`gap-6 items-center absolute px-4 py-8 top-0 bottom-0 bg-slate-900 w-1/2 h-screen flex-col md:p-0 md:bg-transparent md:w-max md:h-max md:flex-row md:static md:flex ${
          menu ? "left-0" : "-left-1/2 hidden"
        }`}
      >
        <Link
          href={"/"}
          className="md:hidden mb-4 flex flex-col text-center items-center font-semibold gap-2"
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
        <li className="w-full md:w-max">
          <Link
            className={`${
              pathname === "/" ? "active text-accent" : ""
            } hover:text-accent transition gap-2 flex`}
            title="HOME"
            href={"/"}
          >
            <span className="md:hidden">
              <AiFillHome size="1.5em" />
            </span>
            <p>Beranda</p>
          </Link>
        </li>

        <li className="w-full md:w-max">
          <Link
            className={`${
              pathname === "/searchInvoice" ? "active text-accent" : ""
            } hover:text-accent transition gap-2 flex`}
            title="LACAK PESANAN"
            href={"/searchInvoice"}
          >
            <span className="md:hidden">
              <AiOutlineSearch size="1.7em" />
            </span>
            <p>Lacak Pesanan</p>
          </Link>
        </li>
      </ul>

      <div className="md:hidden" onClick={menuHandle}>
        {menu ? <AiOutlineClose size="2em" /> : <AiOutlineMenu size="2em" />}
      </div>
    </>
  );
}
