import Link from "next/link";
import { LogoIcon } from "./icons";

const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-1"
  >
    <LogoIcon className="w-9 h-9 fill-[#f77104] dark:fill-[#15ff00]" />
    <p className="text-2xl text-slate-800  dark:text-yellow-50 ">&times;</p>
    <p className="text-2xl text-slate-800 font-bold dark:text-yellow-50 ">3</p>
  </Link>
);

export default Logo;
