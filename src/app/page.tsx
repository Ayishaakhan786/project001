
import Image from "next/image";
import Pic1 from "./images/iphone-14pic.jpg";

export default function Home() {
  return (
    <div className="bg-black text-slate-300 min-h-screen py-10 px-6 sm:px-10 lg:py-40 lg:px-40 text-lg flex flex-col lg:flex-row items-center lg:justify-between">
      {/* Left side: Text */}
      <div className="text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-slate-400 text-2xl sm:text-3xl">Pro Beyond</h1>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl">
          IPHONE 14 <span className="font-bold">PRO</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-2">
          created to change everything for the better for everyone.
        </p>
        <button className="border rounded w-32 sm:w-40 text-sm p-2 text-white bg-slate-800 hover:bg-slate-500 mt-4">
          Shop Now
        </button>
      </div>

      {/* Right side: Image */}
      <div className="flex-shrink-0">
        <Image src={Pic1} alt="iPhone 14" width={300} height={300} className="object-contain mt-2" />
      </div>
    </div>
  );
}

