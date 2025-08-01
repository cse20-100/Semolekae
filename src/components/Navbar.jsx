import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path as needed
import "../styles/burger.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    setMenuOpen(false);
    navigate(route);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Media", path: "/media" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => handleNavigate("/")}
        >
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ label, path }) => (
            <button
              key={label}
              onClick={() => handleNavigate(path)}
              className="relative group text-[#0B2B59] font-semibold hover:text-orange-500 transition"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Burger Icon */}
        <div
          className="burger md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className={`line ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`line ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`line ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {navItems.map(({ label, path }) => (
            <div
              key={label}
              onClick={() => handleNavigate(path)}
              className="px-6 py-3 text-[#0B2B59] font-semibold hover:text-orange-500 transition cursor-pointer"
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
