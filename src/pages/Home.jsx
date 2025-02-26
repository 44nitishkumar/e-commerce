import React from "react";
import { Categories } from "../assets/mockData";
import CartImage from "../assets/Images/cart.jpg";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border-light">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={CartImage} alt="" className="w-full h-full"></img>
          <div className="absolute top-16 right-8">
            <p className="text-gray-600 mb-4">Nitish | e-Shop</p>
            <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              MILLIONS + PRODUCT
            </p>
            <button className="bg-red-600 text-white text-sm px-4 py-2 mt-4">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
