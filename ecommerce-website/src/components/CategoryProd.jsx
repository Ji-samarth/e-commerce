// src/components/CategoryProd.jsx
import React, { useState } from "react";
import products from "../data/products";
import "./CategoryProd.css";

const categories = [
  "Featured",
  "Sneakers",
  "Sport",
  "Formal",
  "Boots",
  "Flip-Flops"
];

const getRandomProducts = (count) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const CategoryProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [featuredProducts] = useState(getRandomProducts(3));

  const filteredProducts = 
    selectedCategory === "Featured"
      ? featuredProducts
      : products.filter((p) => p.category.includes(selectedCategory));

  return (
    <div className="category-products-container">
      {/* Category Navigation */}
      <div className="category-nav">
        {categories.map((category) => (
          <button
            key={category}
            className={`nav-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">₹{product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;