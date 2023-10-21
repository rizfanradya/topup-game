import Image from "next/image";
import Link from "next/link";

type ProductData = {
  id: string;
  link: string;
  background: string;
  thumbnail: string;
  title: string;
  dev: string;
};
type DataProps = { data: ProductData[] };

export default function CardProducts(props: DataProps) {
  const { data } = props;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2 md:gap-4">
      {data.map((doc) => (
        <Link key={doc.id} href={`/payment/${doc.id}`}>
          <div
            style={{
              backgroundImage: `url(/${doc.background})`,
            }}
            className="bg-cover bg-center bg-no-repeat rounded-lg h-32 md:h-52 flex items-center justify-center overflow-hidden group hover:ring-4 ring-slate-100 transition"
          >
            <Image
              className="w-4/5 opacity-75 group-hover:hidden"
              src={`/${doc.thumbnail}`}
              width={250}
              height={250}
              alt={doc.thumbnail}
            />
            <div className="hidden flex-col justify-end gap-2 backdrop-blur p-2 w-full h-full group-hover:flex">
              <Image
                className="rounded-full m-auto w-10 md:w-16"
                src={"/logo.jpg"}
                width={100}
                height={100}
                alt="Logo"
              />
              <p className="font-semibold text-slate-50 text-sm">{doc.title}</p>
              <p className="text-slate-100 text-xs">{doc.dev}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
