import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setActiveTab }) => {
  return (
    <div
      className={`flex flex-col h-full p-4 pt-16 bg-gradient-to-b from-purple-500 to-purple-700 text-white shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
    >
      {/* Close button for mobile */}
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="text-2xl self-end mb-4 md:hidden"
      >
        ✕
      </button>
      <h1 className="text-3xl font-bold mb-8">
        YataYat
      </h1>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin" // Update with the correct path
              onClick={() => setActiveTab('dashboard')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/passengers" // Update with the correct path
              onClick={() => setActiveTab('passengers')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Passengers
            </Link>
          </li>
          <li>
            <Link
              to="/contactinfo" // Update with the correct path
              onClick={() => setActiveTab('contactinfo')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Contact Info
            </Link>
          </li>
          <li>
            <Link
              to="/routes" // Update with the correct path
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Routes
            </Link>
          </li>
          <li>
            <Link
              to="/buses" // Update with the correct path
              onClick={() => setActiveTab('buses')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Buses
            </Link>
          </li>
          <li>
            <Link
              to="/seats" // Update with the correct path
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Seats
            </Link>
          </li>
          <li>
            <Link
              to="/addbuses" // Update with the correct path
              onClick={() => setActiveTab('addbuses')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Add Buses
            </Link>
      


      
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

