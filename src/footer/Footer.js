import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { GoMoveToTop } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="bg-stone-200/50 text-black py-8">
      <div className="relative mx-auto flex flex-col  space-y-6">
        <div className="absolute items-end -top-12 mx-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block rounded-full border-2 border-solid border-[#9f394f]  p-1 text-[#9f394f] shadow transition  "
          >
            <span className="sr-only">Back to top</span>
            <GoMoveToTop size={20} />
          </button>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-gray-400 bg-[#9f394f] p-2 text-white rounded-full">
            <i><IoLogoWhatsapp  size={20}/></i>
          </a>
          <a href="#" className="hover:text-gray-400 bg-[#9f394f] p-2 rounded-full text-white">
            <i><FaTwitter size={20} /></i>
          </a>
          <a href="#" className="hover:text-gray-400 bg-[#9f394f] p-2 rounded-full text-white">
            <i><RiInstagramFill size={20} /></i>
          </a>         
          <a href="#" className="hover:text-gray-400 bg-[#9f394f] p-2  rounded-full text-white">
            <i><FaFacebook size={20}/></i>
          </a>
          
        </div>
        <ul className="flex gap-4 text-sm justify-center">
          <li><a href="#" className="hover:text-rose-800 font-semibold">وبلاگ</a></li>
          <li><a href="#" className="hover:text-rose-800 font-semibold">محصولات</a></li>
          <li><a href="#" className="hover:text-rose-800 font-semibold">مشتریان ما</a></li>
          <li><a href="#" className="hover:text-rose-800 font-semibold">همکاران ما</a></li>
        </ul>
        <p className="text-xs text-gray-500 text-center ">
          Copyright © 2025 | Designed by <span >Negin Enayati</span>
        </p>
      </div>
    </footer>
  );
}