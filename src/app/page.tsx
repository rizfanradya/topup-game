"use client";
import NavbarBottom from "@/components/NavbarBottom";
import Footer from "@/components/footer";
import NavbarTop from "@/components/navbarTop";
import TermsOfServices from "./pages/termsOfServices/page";
import HomePage from "./pages/home/page";
import { useState } from "react";
import AboutUs from "./pages/aboutUs/page";
import SearchInvoice from "./pages/searchInvoice/page";

const Main = () => {
  const [home, setHome] = useState<boolean>(true);
  const [searchInvoice, setSearchInvoice] = useState<boolean>(false);
  const [aboutUs, setAboutUs] = useState<Boolean>(false);
  const [termsOfServices, setTermsOfServices] = useState<Boolean>(false);

  const onHome = () => {
    setHome(true);
    setSearchInvoice(false);
    setAboutUs(false);
    setTermsOfServices(false);
  };
  const onAllGames = () => {
    setHome(true);
    setSearchInvoice(false);
    setAboutUs(false);
    setTermsOfServices(false);
  };
  const onSearchInvoice = () => {
    setHome(false);
    setSearchInvoice(true);
    setAboutUs(false);
    setTermsOfServices(false);
  };
  const onAboutUs = () => {
    setHome(false);
    setSearchInvoice(false);
    setAboutUs(true);
    setTermsOfServices(false);
  };
  const onTermsOnServices = () => {
    setHome(false);
    setSearchInvoice(false);
    setAboutUs(false);
    setTermsOfServices(true);
  };

  let contentPage: any;
  if (home) {
    contentPage = <HomePage />;
  } else if (searchInvoice) {
    contentPage = <SearchInvoice />;
  } else if (aboutUs) {
    contentPage = <AboutUs />;
  } else if (termsOfServices) {
    contentPage = <TermsOfServices />;
  }

  return (
    <>
      <NavbarTop
        onHome={onHome}
        activeHome={home}
        onSearchInvoice={onSearchInvoice}
        activeSearchInvoice={searchInvoice}
      />
      <div className="pt-20 w-[95%] m-auto">{contentPage}</div>
      <Footer
        onHome={onHome}
        onSearchInvoice={onSearchInvoice}
        onAboutUs={onAboutUs}
        onTermsOnServices={onTermsOnServices}
      />
      <NavbarBottom
        onHome={onHome}
        activeHome={home}
        onSearchInvoice={onSearchInvoice}
        activeSearchInvoice={searchInvoice}
      />
    </>
  );
};

export default Main;
