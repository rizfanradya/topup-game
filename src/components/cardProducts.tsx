import Image from "next/image";
import Link from "next/link";

export default function CardProducts({
  data,
  searchValue,
}: {
  data: any;
  searchValue: any;
}) {
  const filteredData = data.filter(
    ({ title, dev }: { title: any; dev: any }) => {
      const searchKeyword = searchValue.toLowerCase();
      return (
        title.toLowerCase().includes(searchKeyword) ||
        dev.toLowerCase().includes(searchKeyword)
      );
    }
  );

  return (
    <div className="my-4">
      {filteredData.length === 0 ? (
        <div className="font-semibold tracking-wider alert alert-info">
          MAAF, PRODUK TIDAK DITEMUKAN!
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2 md:gap-4">
          {data.map((doc: any) => (
            <Link
              className="grid gap-2"
              key={doc.id}
              href={`/payment/${doc.id}`}
            >
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
                  <p className="font-semibold text-slate-50 text-sm capitalize">
                    {doc.title}
                  </p>
                  <p className="text-slate-100 text-xs capitalize">{doc.dev}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
