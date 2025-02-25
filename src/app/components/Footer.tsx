import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-between capitalize  bottom-0 w-full max-w-xl  py-4 mt-12">
      <div className="flex items-center justify-start gap-2">
        <Link
          className="hover:scale-110 hover:font-bold transition-all duration-200 block px-1"
          href="/"
        >
          github
        </Link>
        <Link
          className="hover:scale-110 hover:font-bold transition-all duration-200 block px-1"
          href="/"
        >
          twitter
        </Link>
        <Link
          className="hover:scale-110 hover:font-bold transition-all duration-200 block px-1"
          href="/"
        >
          telegram
        </Link>
        <Link
          className="hover:scale-110 hover:font-bold transition-all duration-200 block px-1"
          href="/"
        >
          email
        </Link>
      </div>
      <p className="text-sm hidden md:block">&copy; 2021 All rights reserved</p>
    </div>
  );
}
