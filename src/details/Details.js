import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import LastCard from "../randcard/LastCard";
import Footer from "../footer/Footer";
import "../randcard/RandCard.css";
import { useCart } from "../CardContext"


const Detail = ({ data }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    useEffect(() => {
        const foundProduct = data.flatMap(category => category.cards).find(item => item.id === id);
        setProduct(foundProduct);
    }, [id, data]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <div class=" animate-slide-left min-w-screen min-h-screen flex items-center  overflow-hidden  ">
                <div class="max-w-6xl m-5  lg:bg-stone-200/50  p-10 lg:p-20 mx-auto text-gray-800  md:text-left">
                    <div class="md:flex items-center rounded ">
                        <div class="  md:w-2/3">
                            <div class="h-[350px] sm:h-[450px] group">
                                <img
                                    src={require(`../image/${product.img}`)}
                                    alt={product.name}
                                    className="rounded-2xl inset-0 p-1 h-full  object-fill transition duration-500 "
                                />
                            </div>
                        </div>
                        <div class=" md:w-2/3 p-3">
                            <div class="mb-10">
                                <h1 class="font-bold  text-center uppercase  text-md lg:text-xl mb-5">{product.name}</h1>
                                <p class="text-sm line-clamp-2 text-end">{product.description} </p>
                            </div>
                            <div>
                                <div class="text-start align-bottom mr-5">
                                    <span class="font-bold text-sm md:text-2xl leading-none align-baseline">{product.price}</span>
                                    <span class="text-sm md:text-xl leading-none align-baseline">تومان</span>
                                </div>
                                <div  class="text-center align-center pt-5 ">
                                    <button  onClick={() => addToCart(product)}   className="bg-[#9f394f] text-stone-100 hover:bg-[#A05263]  rounded-full  py-2 px-3 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> افزودن به سبد خرید </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LastCard />
            <Footer />
        </>

    );
};

export default Detail;
