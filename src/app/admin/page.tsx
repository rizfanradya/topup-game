/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Loading from "../loading";

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }
  if (!session) {
    return (
      <div className="w-screen h-screen p-4 text-center text-2xl font-semibold tracking-wider text-white grid justify-center items-center">
        <p>ANDA HARUS LOGIN SEBAGAI ADMIN UNTUK MENGAKSES HALAMAN ADMIN</p>
        <button onClick={() => signIn()} className="btn btn-outline btn-info">
          LOGIN
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen grid justify-center items-center">
      <p>SELAMAT DATANG DIHALAMAN ADMIN</p>
      <button className="btn btn-outline btn-warning" onClick={() => signOut()}>
        LOGOUT
      </button>
    </div>
  );
}
