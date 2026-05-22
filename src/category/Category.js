import React, { useState } from "react";
import data from "../data.json";
import Filter from "../filter/Filter";
import Card from "../card/Card";
import "../randcard/RandCard.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allProducts = data.flatMap(category => category.cards);

  return (
    <>    
      <Header />
      <div className="w-full text-lg mt-3">
        <div className="flex justify-center">
          <label htmlFor="Search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="Search"
            placeholder="جستجو..."
            className="border-b-2 w-50 p-2.5 px-10 outline-none"          
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4">
        <div className="rounded-lg p-4 md:col-span-1">
          <Filter />
        </div>
        <div className="rounded-lg grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-2">
          {allProducts.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
  
    </>
  );
};

export default Category;
