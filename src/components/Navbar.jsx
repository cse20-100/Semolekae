// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-blue-900 to-blue-800 px-10 py-5 flex justify-between items-center text-white shadow-lg sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-wide drop-shadow-md">
        SEMOLEKAE LEGAL ATTORNEYS
      </div>

      <div className="space-x-8 text-lg font-medium flex items-center">
        <Link to="/" className="hover:text-yellow-400 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-400 transition duration-300">
          About
        </Link>
        <Link to="/services" className="hover:text-yellow-400 transition duration-300">
          Services
        </Link>
        <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
          Contact
        </Link>
        <Link to="/login" className="hover:text-yellow-400 transition duration-300 font-semibold">
          Login
        </Link>
        <Link to="/signup" className="hover:text-yellow-400 transition duration-300 font-semibold">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
