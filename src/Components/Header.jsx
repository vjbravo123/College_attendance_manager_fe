import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "Montserrat" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[80%] z-50 bg-white/60 backdrop-blur-md shadow-md rounded-lg"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <img
          src="https://exciting-python.10web.cloud/wp-content/uploads/2025/10/logo_1fiB52wV.svg"
          alt="logo"
          className="h-8"
        />

        {/* Desktop Links */}
        <div className="hidden  md:flex gap-10 text-gray-800 font-medium">
          <Link to="/TeacherWelcome" className="hover:text-blue-600">
            Teacher Login
          </Link>
          <Link to="/StudentWelcome" className="hover:text-blue-600">
            Student Login
          </Link>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/">
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition">
              Home
            </button>
          </Link>
          <a href="#login">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition">
              Login
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden pt-5 px-6 pb-4 flex flex-col gap-4 bg-white/90 backdrop-blur-md rounded-b-lg shadow-md">
          <Link
            to="/TeacherWelcome"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Teacher Login
          </Link>
          <Link
            to="/StudentWelcome"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Student Login
          </Link>
          <a
            href="#about"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <div className="flex gap-3 mt-2">
            <Link to="/">
              <button className="w-full px-6 py-2 border border-blue-500 text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition">
                Home
              </button>
            </Link>
            <a href="#login">
              <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition">
                Login
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
