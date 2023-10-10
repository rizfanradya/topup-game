import Link from "next/link";
import Image from "next/image";

type ProductData = {
  href: string;
  bg: string;
  thumb: string;
  data: string;
  dev: string;
};
type DataProps = { data: ProductData[] };

const CardProducts = (props: DataProps) => {
  const { data } = props;

  return (
    <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
      {data.map((doc, index) => (
        <Link key={index} href={doc.href}>
          <div
            style={{
              backgroundImage: `url(/${doc.bg})`,
            }}
            className="bg-cover bg-center bg-no-repeat rounded-lg w-[105px] h-36 md:w-40 md:h-56 flex items-center justify-center overflow-hidden group hover:ring-4 ring-slate-100 transition"
          >
            <Image
              className="w-4/5 opacity-75 group-hover:hidden"
              src={`/${doc.thumb}`}
              width={250}
              height={250}
              alt={doc.bg}
            />
            <div className="hidden flex-col justify-end gap-2 backdrop-blur p-2 w-full h-full group-hover:flex">
              <Image
                className="rounded-full m-auto w-12 md:w-20"
                src={"/logo.jpg"}
                width={100}
                height={100}
                alt="Logo"
              />
              <p className="font-semibold text-slate-50 text-xs md:text-base">
                {doc.data}
              </p>
              <p className="text-slate-100 text-[10px] md:text-base">
                {doc.dev}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardProducts;
