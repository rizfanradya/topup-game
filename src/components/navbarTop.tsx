"use client";
import Image from "next/image";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";

type DataProps = {
  onAllGames: any;
  onHome: any;
  activeHome: any;
  activeAllGames: any;
  onSearchInvoice: any;
  activeSearchInvoice: any;
};

const NavbarTop = (props: DataProps) => {
  const {
    onAllGames,
    onHome,
    activeHome,
    activeAllGames,
    onSearchInvoice,
    activeSearchInvoice,
  } = props;

  return (
    <div className="bg-base-300 navbar px-6 flex justify-between items-center fixed z-10">
      <button
        onClick={onHome}
        className="text-[22px] flex items-center font-semibold gap-2"
      >
        <Image
          className="rounded-full"
          src={"/logo.jpg"}
          width={40}
          height={40}
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
          className={`${
            activeAllGames ? "active text-accent" : ""
          } hover:text-accent transition`}
          title="SEMUA GAME"
          onClick={onAllGames}
        >
          <GiGamepad size="2em" />
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
