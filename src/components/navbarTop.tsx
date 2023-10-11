"use client";
import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";

type DataProps = {
  onHome: any;
  activeHome: any;
  onSearchInvoice: any;
  activeSearchInvoice: any;
};

const NavbarTop = (props: DataProps) => {
  const { onHome, activeHome, onSearchInvoice, activeSearchInvoice } = props;

  return (
    <div className="bg-base-300 navbar px-6 flex justify-between items-center fixed z-10">
      <button
        onClick={onHome}
        className="flex items-center font-semibold gap-2"
      >
        <Image
          className="rounded-full"
          src={"/logo.jpg"}
          width={35}
          height={35}
          alt="logo"
        />
        <h1>Warung Top Up Store</h1>
      </button>

      <div className="gap-6 items-center hidden md:flex">
        <button
          className={`${
            activeHome ? "active text-accent" : ""
          } hover:text-accent transition`}
          title="HOME"
          onClick={onHome}
        >
          <AiFillHome size="1.5em" />
        </button>

        <button
          onClick={onSearchInvoice}
          className={`${
            activeSearchInvoice ? "active text-accent" : ""
          } hover:text-accent transition`}
          title="LACAK PESANAN"
        >
          <AiOutlineSearch size="1.7em" />
        </button>
      </div>
    </div>
  );
};

export default NavbarTop;
