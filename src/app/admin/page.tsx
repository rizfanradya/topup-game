"use client";
import { SessionProvider } from "next-auth/react";
import { signIn } from "next-auth/react";

const AdminPage = ({ session }: any) => {
  return (
    <SessionProvider session={session}>
      <button onClick={() => signIn()}>SIGN IN</button>
    </SessionProvider>
  );
};

export default AdminPage;
