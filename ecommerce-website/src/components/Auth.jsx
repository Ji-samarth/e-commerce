// 📁 components/Auth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setForm({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (isLogin) {
      if (
        storedUser &&
        storedUser.email === form.email &&
        storedUser.password === form.password
      ) {
        alert(`Welcome back, ${storedUser.name}`);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Signup successful! Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <p className="auth-toggle">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default Auth;
