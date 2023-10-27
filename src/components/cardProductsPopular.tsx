import Link from "next/link";

export default function CardProductsPopular({ data }: { data: any }) {
  return (
    <div className="mb-4">
      <h1 className="font-medium text-slate-100">🔥 POPULER</h1>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
        {data.map((doc: any, index: any) => (
          <Link href={doc.id} key={index}>
            <div className="bg-slate-800 flex p-[6px] md:p-2 rounded-lg gap-2 items-center hover:ring-2 ring-sky-500 transition">
              <div
                style={{
                  backgroundImage: `url(/${doc.background})`,
                }}
                className="w-12 h-12 md:w-16 md:h-16 bg-no-repeat bg-cover bg-center rounded-lg"
              ></div>
              <div className="grid gap-2">
                <h3 className="font-medium text-white text-[8px] md:text-xs capitalize">
                  {doc.title}
                </h3>
                <p className="text-slate-100 text-[6px] md:text-[10px] font-light capitalize">
                  {doc.dev}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
