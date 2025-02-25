import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <Link href="/blog/hore" className=" my-8  md:0 ">
      <div className="h-[180px] relative ">
        <Image
          src="/images/GgG9eTzWYAAkWx5.jpeg"
          alt="hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-md overflow-hidden opacity-70 "
        />
        <div className="absolute -bottom-8 left-4 bg-white/50 backdrop-blur-sm    dark:bg-[#181818]/60 p-4 rounded-lg shadow-lg md:max-w-[80%] hidden md:block ">
          <button className=" text-xs bg-[#242424] w-fit py-1 px-2 rounded-sm text-white  mb-1">
            Technology
          </button>
          <h2>The Future of Technology is Here</h2>
          <p>Lorem ipsum ..., quos.</p>
        </div>
      </div>
    </Link>
  );
}
