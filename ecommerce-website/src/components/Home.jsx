
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Dheeza Shoes</h1>
      <p>Discover our amazing collection of footwear</p>
      <Link to="/explore" className="explore-btn">
        Browse Collection
      </Link>
    </div>
  );
};

export default Home;