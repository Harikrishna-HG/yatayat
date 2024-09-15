import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = ({ isDarkMode }) => {
  return (  <>
                <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

    <footer className={`pt-16 px-10 ${isDarkMode ? "bg-purple-700 text-white" : "bg-white text-purple-700"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Company Section */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-6 relative">
              Company
              <span className="block absolute bottom-0 left-0 bg-pink-500 h-1 w-12"></span>
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Future Plans</a></li>
            </ul>
          </div>
          {/* Get Help Section */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-6 relative">
              Get Help
              <span className="block absolute bottom-0 left-0 bg-pink-500 h-1 w-12"></span>
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Reservations</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Contact Detail</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Payment Option</a></li>
            </ul>
          </div>
          {/* Online Ticket Section */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-6 relative">
              Online Ticket
              <span className="block absolute bottom-0 left-0 bg-pink-500 h-1 w-12"></span>
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Security</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Discount</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Available Seats</a></li>
              <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Refund</a></li>
            </ul>
          </div>
          {/* Follow Us Section */}
          <div className="w-full md:w-1/4 px-4 ">
            <h4 className="text-xl font-semibold mb-6 relative">
              Follow Us
              <span className="block absolute bottom-0 left-0 bg-pink-500 h-1 w-12"></span>
            </h4>
            <div className="flex space-x-4">
              <a href="#" className={`flex items-center justify-center h-10 w-10 rounded-full bg-opacity-50 ${isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"} hover:text-gray-800 transition-colors`}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={`flex items-center justify-center h-10 w-10 rounded-full bg-opacity-50 ${isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"} hover:text-gray-800 transition-colors`}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={`flex items-center justify-center h-10 w-10 rounded-full bg-opacity-50 ${isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"} hover:text-gray-800 transition-colors`}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={`flex items-center justify-center h-10 w-10 rounded-full bg-opacity-50 ${isDarkMode ? "bg-white text-purple-700" : "bg-purple-700 text-white"} hover:text-gray-800 transition-colors`}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

          <div className="pt-4 text-center mt-6">
    <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

            <p className={`text-lg py-2 ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`} >&copy;Copyright Developed By : Students of Farwestern University - 2024</p>
          </div>
        </>
  );
};

export default Footer;
