import React, { useEffect, useState } from "react";
import "./Categories.css";

const categories = [
  "Sneakers",
  "Sport Shoes",
  "Formal Shoes",
  "Boots",
  "Flip-Flops"
];

const Categories = ({ onCategorySelect = () => {} }) => {
  const [selectedCategory, setSelectedCategory] = useState("Sneakers");

  // Trigger default category on first render
  useEffect(() => {
    onCategorySelect("Sneakers");
  }, [onCategorySelect]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <section className="categories">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div
            className={`category-item ${selectedCategory === cat ? "active" : ""}`}
            key={index}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
