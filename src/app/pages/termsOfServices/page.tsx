import Navbar from "@/app/navbar";
import prisma from "@/utils/prisma";

const TermsOfServices = async () => {
  const data = await prisma.termOfServices.findMany({
    select: { id: true, title: true, subContent: true },
  });

  return (
    <Navbar>
      <div className="tracking-wider">
        <div
          style={{
            backgroundImage: "url(/bgAboutUs.jpg)",
          }}
          className="bg-center text-slate-100 text-2xl font-semibold h-52 rounded-xl overflow-hidden"
        >
          <div className="w-full h-full backdrop-blur-sm text-center flex items-center justify-center">
            <h1>SYARAT & KETENTUAN PENGGUNA</h1>
          </div>
        </div>

        <div className="mx-auto my-10 text-justify">
          <div className="flex flex-col gap-8 p-6 rounded-xl bg-slate-900 text-white md:p-8">
            {data.map((doc, index) => (
              <ol className="flex flex-col gap-3" key={index}>
                <li className="font-medium">
                  {index + 1}. {doc.title}
                </li>
                {doc.subContent.map((subDoc, subIndex) => (
                  <ol className="flex flex-col gap-2" key={subIndex}>
                    <li className="pl-4">
                      {index + 1}.{subIndex + 1}. {subDoc.title}
                    </li>
                    <p className="pl-8 text-sm font-light">{subDoc.text}</p>
                  </ol>
                ))}
              </ol>
            ))}
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default TermsOfServices;
