import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { useCards } from "../CardContext";
import data from "../data.json";

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
      <span className="relative flex justify-center my-10 ">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-rose-700 to-transparent opacity-75"></div>
        <span className="relative z-10 md:text-2xl bg-white font-bold text-rose-700 px-6">محصولات پیشنهادی</span>
      </span>
      <div className=" grid grid-cols-2 gap-6 md:grid-cols-5  m-6 ">
        <div className="  col-span-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-left ">
          {randomCards.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GetCard;

