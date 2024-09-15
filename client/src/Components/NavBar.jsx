import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import image from "../assets/vehicle.png";
import test from '../assets/test.png';

const NavBar = ({ isDarkMode, toggleDarkMode, toggleMenu, isMenuOpen }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-5 shadow-lg h-auto border-b-4 ${
          isDarkMode ? "bg-purple-700 border-white" : "bg-white border-purple-700"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src={image} alt="YataYat Logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-xl tracking-tight">YataYat</span>
          </div>

          <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
            <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
              <Link to="/" className="hover:text-gray-800 text-center block md:inline-block mt-4 md:mt-0 mx-2">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-800 text-center block md:inline-block mt-4 md:mt-0 mx-2">
                About
              </Link>
              <Link to="/services" className="hover:text-gray-800 text-center block md:inline-block mt-4 md:mt-0 mx-2">
                Services
              </Link>
              <Link to="/contact" className="hover:text-gray-800 text-center block md:inline-block mt-4 md:mt-0 mx-2">
                Contact
              </Link>
              <Link to="/pages" className="hover:text-gray-800 text-center block md:inline-block mt-4 md:mt-0 mx-2">
                Pages
              </Link>
              <Link to="/faq" className="hover:text-gray-800 text-center block md:inline-block mt-4 md:mt-0 mx-2">
                FAQs
              </Link>
            </nav>
          </div>

          <div className="md:flex items-center">
            <Link
              to="/bussearch"
              className={`md:block p-2 rounded hidden hover:bg-purple-700 hover:border hover:text-white ${
                isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"
              }`}
            >
              Book Now
            </Link>

            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded hover:bg-gray-200">
              <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>

            {isLoggedIn ? (
              <div className="flex items-center  ml-6">
                <img src={test} alt="User" className="h-10 w-10 rounded-full mr-2 md:block hidden" />
                <button onClick={handleLogout} className={` ml-4 px-4 py-2 rounded shadow-sm ${
                isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"
              } hidden md:block`}>
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`ml-4 px-4 py-2 rounded shadow-sm hover:bg-purple-700 hover:border hover:text-white ${
                  isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"
                } hidden md:block`}
              >
                Login
              </Link>
            )}
          </div>

          <div className="block md:hidden">
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white">
              <svg
                className={`h-3 w-3 ${isDarkMode ? "fill-white bg-purple-700" : "fill-purple-700 bg-white"}`}
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />
    </>
  );
};

export default NavBar;
