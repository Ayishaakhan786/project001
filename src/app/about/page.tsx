
import Image from "next/image";
import Pic2 from "./Img/iphone-pic2.jpg";
export default function About (){
    return(
        <div className="bg-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 py-10 sm:py-20">
      {/* Left side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
        <Image src={Pic2} alt="iPhone 14 Pro Max" width={300} height={300} className="object-contain"/>
      </div>

      {/* Right side: Text */}
      <div className="w-full lg:w-1/2 lg:ml-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">APPLE iPHONE 14 PRO MAX</h1>
        <p className="text-xl sm:text-2xl text-red-600 font-semibold my-4">$1399 <span className="line-through text-gray-500">$1499</span></p>

        <ul className="space-y-4 border border-gray-300 p-4 rounded-md">
          <li>
            <span className="font-semibold">Screen Size:</span>
            <h1 className="text-base sm:text-lg">6.7"</h1>
          </li>
          <li>
            <span className="font-semibold">Front Camera:</span>
            <h1 className="text-base sm:text-lg">12MP</h1>
          </li>
          <li>
            <span className="font-semibold">Main Camera:</span>
            <h1 className="text-base sm:text-lg">48 + 12 + 12MP</h1>
          </li>
        </ul>

        <p className="mt-6 text-sm sm:text-lg">
          Discover unmatched innovation with the iPhone 14 Pro Max, combining cutting-edge technology with sleek design to elevate your smartphone experience. From its stunning display to the powerful camera system, this device sets a new standard in performance and style.
        </p>
      </div>
    </div>
  );
}
