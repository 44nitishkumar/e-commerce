import React from "react";
import ManCategory from "../assets/Images/man.jpg";
import WomanCategory from "../assets/Images/women.jpg";
import KidCategory from "../assets/Images/kid.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: ManCategory,
  },
  {
    title: "Women",
    imageUrl: WomanCategory,
  },
  {
    title: "Kids",
    imageUrl: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid  grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative transform trasition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt=""
            className="w-90 h-70 object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-5 right-15">
            <p className="text-xl font-bold">{category.title} </p>
            <p className="text-grat-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
