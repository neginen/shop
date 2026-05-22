import React from "react";
import negin from "../image/negin.png"
import { Link } from "react-router-dom";
import { useCart } from "../CardContext";


export default function Header() {

    const { cart } = useCart();
    return (
        <header dir="rtl" className="w-full p-2  bg-white dark:bg-neutral-900/80 h-50 dark:border-neutral-700">
            <div className="mx-auto   flex  max-w-6xl  items-center justify-between    ">
                <Link to="/" className="flex items-center ">
                    <img src={negin} alt="logo" className=" h-12 sm:h-16 w-auto" />
                </Link>
                <nav className="items-center lg:flex  ">
                    <ul className="flex items-center gap-1  ">
                        <li className="flex items-center  rounded-md px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-white/5">
                            <Link to="/Category" className="flex focus:outline-none focus:text-rose-700" > محصولات  </Link>
                        </li>
                        <li className="flex items-center  rounded-md px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-white/5">
                            <Link to="/Detailcard" className="flex items-center focus:outline-none focus:text-rose-700">
                                سبدخرید
                                <div className="relative">
                                    {cart.length > 0 && (
                                        <span className="absolute -top-5  bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                            {cart.length}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center ">
                    <Link to="/Signin" className="rounded-full bg-[#A05263] p-2 text-xs  text-white " >
                        ورود / ثبت نام
                    </Link>
                </div>
            </div>            
        </header>
    );
}

