import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { posts } from "../../../post";
export default function page() {
  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto prose dark:prose-invert mt-4">
        {posts.map((p, dix) => {
          return (
            <Link key={dix} href={`/blog/${p.slug}`} className=" group  min-w-[100%] no-underline ">
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
      </div>
      <Footer />
    </div>
  );
}
