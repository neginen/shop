import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product }) {
    return (
        <div className="lg:w-full hover:shadow-xl bg-stone-200/50 transition-transform transform">
            <Link to={`/Category/${product.id}`}>
                <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                         src={require(`../image/${product.img}`)}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-2 text-[#333333]">
                    <h3 className="text-sm sm:text-base  font-semibold mb-2">
                        {product.name}
                    </h3>
                    <div className="text-start">
                        <span className="text-xs sm:text-sm md:text-base font-bold mb-1 leading-none align-baseline">
                            {product.price}
                        </span>
                        <span className="text-sm sm:text-base leading-none align-baseline ml-1">
                            تومان
                        </span>
                    </div>
                    <div className="flex justify-center my-3">
                        <button className="text-xs   bg-[#9f394f] p-2 text-stone-100 hover:bg-[#A05263] rounded-full md:px-10">
                            مشاهده و خرید
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
