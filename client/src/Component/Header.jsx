import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../public/Images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo / Brand */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-20 h-15" />
        <span className="text-xl font-bold text-gray-800">YourApp</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
        <Link
          as={Link}
          to="/home"
          style={{ cursor: "pointer" }}
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>
        <Link
          as={Link}
          to="/about"
          style={{ cursor: "pointer" }}
          className="hover:text-blue-600 transition "
        >
          About Us
        </Link>
        <Link
          as={Link}
          to="/contact"
          style={{ cursor: "pointer" }}
          className="hover:text-blue-600 transition "
        >
          Contact
        </Link>
      </nav>

      {/* User Icon / Login */}
      <div className="flex items-center space-x-4">
        <Link
          as={Link}
          to="/login"
          className="hidden md:block px-4 py-1.5 rounded bg-blue-600 text-white hover:bg-purple-700 transition text-sm"
        >
          Login
        </Link>
        <Link
          className="cursor-pointer hover:text-purple-700"
          as={Link}
          to="/register"
        >
          <FaUserCircle
            size={24}
            className="text-gray-700 cursor-pointer hover:text-blue-600 "
          />{" "}
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
