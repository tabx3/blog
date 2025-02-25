import Link from "next/link";

export default function Footer() {
  return (
    <div className="  fixed bottom-0  flex items-center justify-between capitalize text-dm py-6 ">
      <div className=" flex items-center justify-start gap-2">
        <Link href="/">github</Link>
        <Link href="/">twitter</Link>
        <Link href="/">telegram</Link>
        <Link href="/">email</Link>
      </div>

      <p className="text-sm hidden md:block">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
