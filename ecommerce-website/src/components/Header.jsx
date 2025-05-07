// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Dheeza Shoes</Link>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <a href="#">Support</a> {/* Keeping as regular link for now */}
      </nav>

      <div className="profile">
        <input type="text" placeholder="Search shoes..." />
        <a href="#">Cart</a>
        <a href="#">Profile</a>
      </div>
    </header>
  );
};

export default Header;