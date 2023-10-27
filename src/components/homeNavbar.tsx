"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 mb-2">
      <Link
        href={"/"}
        className={`border py-2 px-3 rounded-full transition text-white font-medium text-[10px] ${
          pathname === "/"
            ? "border-sky-500 bg-sky-500 text-black"
            : "border-slate-600 hover:bg-slate-800"
        }`}
      >
        Top Up Game
      </Link>

      <Link
        href={"/home/voucher"}
        className={`border py-2 px-3 rounded-full transition text-white font-medium text-[10px] ${
          pathname === "/home/voucher"
            ? "border-sky-500 bg-sky-500 text-black"
            : "border-slate-600 hover:bg-slate-800"
        }`}
      >
        Voucher
      </Link>

      <Link
        href={"/home/pulsa"}
        className={`border py-2 px-3 rounded-full transition text-white font-medium text-[10px] ${
          pathname === "/home/pulsa"
            ? "border-sky-500 bg-sky-500 text-black"
            : "border-slate-600 hover:bg-slate-800"
        }`}
      >
        Pulsa
      </Link>
    </div>
  );
}
