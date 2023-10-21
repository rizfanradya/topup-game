import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AuthProvider from "./sessionProvider";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Warung Top Up Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en" className="tracking-wide">
        <body className={poppins.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
