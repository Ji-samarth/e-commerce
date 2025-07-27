import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">Dheeza <span>Shoes</span></Link>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <a href="#">Support</a>
      </nav>

      <div className="profile">
        <Link to="/cart" className="cart-link">
          🛒 Cart
          {cartItems && cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>

        <Link to="/login">👤 Profile</Link>
      </div>
    </header>
  );
};

export default Header;