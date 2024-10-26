import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-200 w-full p-4">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-lg">Cyber</span>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded w-40 h-10 text-sm"
          />
        </div>
        
        <ul className="flex space-x-6 mt-4 sm:mt-0">
          <li className="text-lg underline flex hover:bg-slate-50 p-2 rounded">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg underline flex hover:bg-slate-50 p-2 rounded">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg underline flex hover:bg-slate-50 p-2 rounded">
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className="text-lg underline flex hover:bg-slate-50 p-2 rounded">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <FaRegHeart size={25} />
          <IoCartOutline size={25} />
          <TbUser size={25} />
        </div>
      </div>
    </header>
  );
}
