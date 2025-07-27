import React, { useState, useEffect } from "react";
import products from "../data/products.json";
import "./Explore.css";

const Explore = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="explore-container">
      <h1 className="explore-title">Discover Our Collection</h1>

      {/* 🔍 Live Search Box */}
      <input
        type="text"
        placeholder="Search shoes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="explore-search-box"
      />

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">₹{product.price.toFixed(2)}</p>

                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
