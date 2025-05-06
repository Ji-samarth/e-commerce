// src/components/Categories.jsx
import React from "react";
import "./Categories.css";

const categories = [
  "Sneakers",
  "Sport Shoes",
  "Formal Shoes",
  "Boots",
  "Flip-Flops"
];

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div className="category-item" key={index}>
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
