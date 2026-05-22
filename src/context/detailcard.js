import React from "react";
import { useCart } from "../CardContext"
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => {
    const cleanPrice = Number(item.price.toString().replace(/,/g, "").replace(/\s/g, ""));
    return sum + cleanPrice * (item.count || 1);
  }, 0);

  return (
    <>
      <Header />
      <div className="min-h-screen  py-10 px-5">
        <div className="max-w-4xl mx-auto  bg-stone-200/50   p-6">
          {cart.length === 0 ? (
            <div className="text-center text-gray-600 mb-5">
              <p> سبد خرید شما خالی است 😔  </p>
              <Link to="/Category" className="text-[#9f394f]  font-semibold">
                بازگشت به فروشگاه
              </Link>
            </div>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b py-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={require(`../image/${item.img}`)}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div>
                        <h2 className=" text-sm ">{item.name}</h2>

                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm ">
                        {item.price.toLocaleString("fa-IR")}
                      </span>
                      <button className=" text-white rounded-full hover:text-[#9f394f]">
                        ❌
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center">
                <h2 className="text-xl font-bold">مجموع:</h2>
                <span className="text-xl font-bold text-[#9f394f]">
                  {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>
              <div className="mt-6 text-center">
                <button className="hover:bg-[#ba5a68] text-white text-sm px-3 py-2 rounded-full bg-[#9f394f] transition font-semibold">
                  ادامه فرایند خرید
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

