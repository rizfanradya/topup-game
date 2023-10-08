import Link from "next/link";
import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";

const NavbarBottom = () => {
  return (
    <ul className="fixed bottom-0 flex items-center md:hidden">
      <li>
        <Link href={"/"} title="HOME">
          <AiFillHome size="1.8em" />
        </Link>
      </li>
      <li>
        <Link href={"/"} title="SEMUA GAME">
          <GiGamepad size="2.3em" />
        </Link>
      </li>
      <li>
        <Link href={"/"} title="LACAK PESANAN">
          <AiOutlineSearch size="2em" />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarBottom;
