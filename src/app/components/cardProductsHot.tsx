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
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
      {data.map((doc, index) => (
        <Link href={doc.href} key={index}>
          <div className="bg-slate-700 flex p-2 rounded-lg gap-2 items-center hover:ring-2 ring-sky-500 transition">
            <div
              style={{
                backgroundImage: `url(/${doc.bg})`,
              }}
              className="w-20 h-20 bg-no-repeat bg-cover bg-center rounded-lg"
            ></div>
            <div className="grid gap-2">
              <h3 className="font-medium text-white text-sm">{doc.data}</h3>
              <p className="text-slate-100 text-xs font-light">{doc.dev}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardProductsHot;
