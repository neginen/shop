import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import data from "../data.json";
import { Link } from "react-router-dom";


const getRandomCards = (data) => {
  const allCards = data.flatMap((category) => category.cards);
  const shuffledCards = allCards.sort(() => Math.random() - 0.5);
  return shuffledCards.slice(0, 4);
};

const GetCard = () => {
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    const cards = getRandomCards(data);
    setRandomCards(cards);
  }, []);

  return (
    <>
      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-rose-700 to-transparent opacity-75"></div>
        <span className="relative z-10 md:text-2xl  bg-white font-bold text-rose-700 px-6">آخرین محصولات</span>
      </span>
   
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-6  my-6 ">
        <div className="col-span-1 flex flex-col justify-between items-start">
          <Link
            to="/Category"
            className=" p-3 text-rose-700 text-md flex items-center gap-2 transition-colors  "
          >            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            <span>مشاهده همه</span>
          </Link>
        </div>
        <div className="col-span-5 grid grid-cols-2  lg:grid-cols-4 gap-6 m-6 animate-slide-left">
          {randomCards.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </>

  );
};

export default GetCard;
