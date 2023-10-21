"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type DataProps = { children: ReactNode };
export default function AuthProvider(props: DataProps) {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
}
