"use client";
import NavbarFooter from "@/app/navbarFooter";
import CardProductsPopular from "@/components/cardProductsPopular";
import HomeCarousel from "@/components/homeCarousel";
import HomeNavbar from "@/components/homeNavbar";
import axios from "axios";
import { ReactNode, useState, useEffect } from "react";

type Product = {
  id: string;
  title: string;
  dev: string;
  background: string;
  thumbnail: string;
  type: string;
  serverIdInput: boolean;
  typeValue: string;
  createdAt: string;
  updatedAt: string;
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  const [popular, setPopular] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/retrieveDataProducts");
        if (response.data && Array.isArray(response.data.data)) {
          const hotGames = response.data.data.slice(0, 4);
          const hotVoucher = response.data.data.slice(0, 4);
          const popularData = [...hotGames, ...hotVoucher];
          setPopular(popularData);
        } else {
          console.error("Invalid response format from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <NavbarFooter>
      <HomeCarousel />
      <CardProductsPopular data={popular} />
      <HomeNavbar />
      {children}
    </NavbarFooter>
  );
}
