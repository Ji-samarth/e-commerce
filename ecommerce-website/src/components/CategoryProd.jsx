
import React, { useState } from "react";
import products from "../data/products";
import "./CategoryProd.css";

const CategoryProducts = () => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <div>
      <div className="category-buttons">
        {[
          "Sneakers",
          "Sport Shoes",
          "Formal Shoes",
          "Boots",
          "Flip-Flops",
        ].map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {selectedCategory === "" ? (
          <p>Please select a category above.</p>
        ) : filtered.length > 0 ? (
          filtered.map((prod) => (
            <div className="product-card" key={prod.key}>
              <img
                src={prod.image}
                alt={prod.title}
                className="product-image"
              />
              <h3 className="product-title">{prod.title}</h3>
              <p className="product-desc">{prod.description}</p>
              <p className="product-price">₹{prod.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
