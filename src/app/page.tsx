"use client";
import NavbarBottom from "@/components/NavbarBottom";
import Footer from "@/components/footer";
import NavbarTop from "@/components/navbarTop";
import TermsOfServices from "./pages/termsOfServices/page";
import HomePage from "./pages/home/page";
import { useState } from "react";
import AllGames from "./pages/allGames/page";
import AboutUs from "./pages/aboutUs/page";
import SearchInvoice from "./pages/searchInvoice/page";

const Main = () => {
  const [home, setHome] = useState<boolean>(true);
  const [allGames, setAllGames] = useState<boolean>(false);
  const [searchInvoice, setSearchInvoice] = useState<boolean>(false);
  const [aboutUs, setAboutUs] = useState<Boolean>(false);
  const [termsOfServices, setTermsOfServices] = useState<Boolean>(false);

  const onHome = () => {
    setHome(true);
    setAllGames(false);
    setSearchInvoice(false);
    setAboutUs(false);
    setTermsOfServices(false);
  };
  const onAllGames = () => {
    setHome(false);
    setAllGames(true);
    setSearchInvoice(false);
    setAboutUs(false);
    setTermsOfServices(false);
  };
  const onSearchInvoice = () => {
    setHome(false);
    setAllGames(false);
    setSearchInvoice(true);
    setAboutUs(false);
    setTermsOfServices(false);
  };
  const onAboutUs = () => {
    setHome(false);
    setAllGames(false);
    setSearchInvoice(false);
    setAboutUs(true);
    setTermsOfServices(false);
  };
  const onTermsOnServices = () => {
    setHome(false);
    setAllGames(false);
    setSearchInvoice(false);
    setAboutUs(false);
    setTermsOfServices(true);
  };

  let contentPage: any;
  if (home) {
    contentPage = <HomePage />;
  } else if (allGames) {
    contentPage = <AllGames />;
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
        onAllGames={onAllGames}
        activeAllGames={allGames}
        onSearchInvoice={onSearchInvoice}
        activeSearchInvoice={searchInvoice}
      />
      <div className="pt-20 w-11/12 m-auto">{contentPage}</div>
      <Footer
        onHome={onHome}
        onAllGames={onAllGames}
        onSearchInvoice={onSearchInvoice}
        onAboutUs={onAboutUs}
        onTermsOnServices={onTermsOnServices}
      />
      <NavbarBottom
        onHome={onHome}
        activeHome={home}
        onAllGames={onAllGames}
        activeAllGames={allGames}
        onSearchInvoice={onSearchInvoice}
        activeSearchInvoice={searchInvoice}
      />
    </>
  );
};

export default Main;
