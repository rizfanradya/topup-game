"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";

const NavbarBottom = () => {
  const pathname = usePathname();

  return (
    <ul className="btm-nav md:hidden border-t-2 border-slate-500">
      <li>
        <Link
          className={`${
            pathname === "/" ? "active text-accent" : ""
          } hover:text-accent transition`}
          href={"/"}
          title="HOME"
        >
          <AiFillHome size="1.6em" />
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
          <GiGamepad size="2.1em" />
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === "/pages/searchInvoice" ? "active text-accent" : ""
          } hover:text-accent transition`}
          href={"/"}
          title="LACAK PESANAN"
        >
          <AiOutlineSearch size="1.8em" />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarBottom;
