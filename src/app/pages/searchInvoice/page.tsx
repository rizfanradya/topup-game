import { BiSearchAlt } from "react-icons/bi";

const SearchInvoice = () => {
  return (
    <div>
      <div className="form-control w-full flex flex-col gap-8 p-10">
        <label htmlFor="lacakpesanan" className="font-medium text-slate-100">
          LACAK PESANAN DENGAN NOMOR TELEPON
        </label>
        <div className="input-group w-full">
          <input
            id="lacakpesanan"
            type="text"
            placeholder="Masukkan nomor handphonemu cth:(08123456789)"
            className="input input-bordered w-full bg-slate-100 text-sm text-black h-10"
          />
          <button className="h-10 grid justify-center items-center btn-square btn-info">
            <BiSearchAlt size="1.5em" />
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SearchInvoice;
