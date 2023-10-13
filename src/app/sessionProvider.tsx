"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type DataProps = { children: ReactNode };
const AuthProvider = (props: DataProps) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
