import React from 'react';
import data from "../data.json"
import GridCard from './GridCard';



export default function Grid() {
  return (
    <div className=''>
      <span className=" relative flex mt-10  justify-center ">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-rose-700 to-transparent opacity-75"></div>
        <span className="relative z-10 md:text-2xl  bg-white font-bold text-rose-700 px-6">دسته بندی محصولات</span>
      </span>
      <div className="relative grid grid-cols-1   gap-6 md:grid-cols-4 p-8 container">
        {data.map((card, index) => (
          <GridCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
