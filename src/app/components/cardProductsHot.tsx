import Link from "next/link";

type ProductData = {
  href: string;
  bg: string;
  data: string;
  dev: string;
};
type DataProps = { data: ProductData[] };
const CardProductsHot = (props: DataProps) => {
  const { data } = props;

  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
      {data.map((doc, index) => (
        <Link href={doc.href} key={index}>
          <div className="bg-slate-700 flex p-[6px] md:p-2 rounded-lg gap-2 items-center hover:ring-2 ring-sky-500 transition">
            <div
              style={{
                backgroundImage: `url(/${doc.bg})`,
              }}
              className="w-12 h-12 md:w-16 md:h-16 bg-no-repeat bg-cover bg-center rounded-lg"
            ></div>
            <div className="grid gap-2">
              <h3 className="font-medium text-white text-[8px] md:text-xs">
                {doc.data}
              </h3>
              <p className="text-slate-100 text-[6px] md:text-[10px] font-light">
                {doc.dev}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardProductsHot;
