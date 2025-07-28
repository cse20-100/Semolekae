import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { replace: false });
      // Delay to allow page to load and render
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    }
  };

  return (
    <nav className="bg-white px-10 py-5 flex justify-between items-center text-gray-900 shadow-md sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-wide font-serif drop-shadow-sm">
        SEMOLEKAE & ASSOCIATES
      </div>

      <div className="space-x-8 text-lg font-medium flex items-center">
        <button
          onClick={() => handleClick("home")}
          className="hover:text-orange-600 transition duration-300 font-semibold"
        >
          Home
        </button>
        <button
          onClick={() => handleClick("about")}
          className="hover:text-orange-600 transition duration-300 font-semibold"
        >
          About
        </button>
        <button
          onClick={() => handleClick("services")}
          className="hover:text-orange-600 transition duration-300 font-semibold"
        >
          Services
        </button>
        <button
          onClick={() => handleClick("contact")}
          className="hover:text-orange-600 transition duration-300 font-semibold"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
