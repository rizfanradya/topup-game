import Navbar from "@/app/navbar";
import prisma from "@/utils/prisma";
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutUs = async () => {
  const data = await prisma.aboutus.findMany();

  return (
    <Navbar>
      <div className="tracking-wider">
        <div
          style={{
            backgroundImage: "url(/bgAboutUs.jpg)",
          }}
          className="text-slate-100 text-2xl font-semibold h-52 rounded-xl overflow-hidden"
        >
          <div className="w-full h-full backdrop-blur-sm text-center flex items-center justify-center">
            <h1>TENTANG KAMI</h1>
          </div>
        </div>

        <div className="mt-8 mb-24 lg:grid grid-cols-2 ">
          <div>
            <h2 className="font-semibold text-xl p-6 text-center">OWNER</h2>
            <div
              style={{
                backgroundImage: `url(${data[0].image})`,
              }}
              className="rounded-3xl m-auto overflow-hidden h-[400px] bg-center bg-cover relative max-w-xs"
            >
              <div className="text-white backdrop-blur-md rounded-3xl absolute bottom-0 p-4">
                <p className="font-semibold text-xl">{data[0].name}</p>
                <p className="font-medium">{data[0].status}</p>
                <p className="mt-5 text-xs font-light text-justify">
                  {data[0].desc}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl p-6 text-center">ALAMAT</h2>
            <div className="p-4 rounded-2xl max-w-sm m-auto">
              <div className="text-secondary bg-slate-700 w-max p-3 text-2xl rounded-2xl h-max">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-slate-100 text-sm font-light pt-4">
                  {data[0].address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default AboutUs;
