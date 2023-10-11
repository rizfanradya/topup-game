"use client";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

type DataProps = {
  onHome: any;
  activeHome: any;
  onSearchInvoice: any;
  activeSearchInvoice: any;
};

const NavbarBottom = (props: DataProps) => {
  const { onHome, activeHome, onSearchInvoice, activeSearchInvoice } = props;

  return (
    <div className="btm-nav md:hidden border-t-2 border-slate-500">
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
        <AiOutlineSearch size="1.8em" />
      </button>
    </div>
  );
};

export default NavbarBottom;
