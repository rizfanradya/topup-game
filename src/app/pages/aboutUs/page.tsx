import NavbarBottom from "@/components/NavbarBottom";
import Footer from "@/components/footer";
import NavbarTop from "@/components/navbarTop";
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <NavbarTop />

      <div className="tracking-wider">
        <div className="bg-[url(/bgAboutUs.jpg)] text-slate-100 text-5xl font-semibold h-96">
          <div className="w-full h-full backdrop-blur-sm flex items-center justify-center">
            <h1>TENTANG KAMI</h1>
          </div>
        </div>

        <div className="w-11/12 m-auto mt-10 mb-24">
          <h2 className="font-semibold text-2xl p-6 text-center">OWNER</h2>
          <div className="rounded-3xl m-auto overflow-hidden bg-[url(/aboutUs.jpg)] h-[500px] bg-center bg-cover relative max-w-sm">
            <div className="text-white backdrop-blur-md rounded-3xl absolute bottom-0 p-4">
              <p className="font-semibold text-2xl">Rafael</p>
              <p className="font-medium text-lg">Owner</p>
              <p className="mt-5 text-sm">
                Sebagai Owner, Rafael mengawasi strategi dan pelaksanaan Warung
                Top Up Store.com agar perusahaan mencapai tujuan bisnisnya.
              </p>
            </div>
          </div>

          <h2 className="font-semibold text-2xl p-6 text-center">ALAMAT</h2>
          <div className="p-4 rounded-2xl max-w-sm">
            <div className="text-secondary bg-slate-700 w-max p-3 text-4xl rounded-2xl h-max">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-slate-100 text-base p-4">
                Perumahan jalan TARUTUNG Pematangsiantar RT 01/RW01, Kode Pos
                21123 Telepon: 087824898643
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <NavbarBottom />
    </>
  );
};

export default AboutUs;