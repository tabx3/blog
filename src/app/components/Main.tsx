import Link from "next/link";
import Image from "next/image";
import { posts } from "../../../post";

export default function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 mt-8 md:mt-20">
      {posts.map((p, dix) => {
        return (
          <Link key={dix} href={`/blog/${p.slug}`} className=" group  min-w-[100%] ">
            <div className="relative aspect-[4/3] w-full mb-4">
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-md"
              />
            </div>

            <h2 className="text-md leading-7  font-bold line-clamp-1">{p.title}</h2>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500  rounded-sm w-fit px-1 py-.5 dark:bg-slate-400 dark:text-slate-900">
                {p.category}
              </p>
              <p className="text-sm  text-gray-500">{p.date}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
