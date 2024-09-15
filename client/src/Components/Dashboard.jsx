import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PassengerTable from './PassengerTable';
import BookingTable from './BookingTable';
import BusForm  from './BusForm';
import img from "../assets/test.png";
import BusCard from './BusInfo';
import User from './ContactInfo';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard'); // To track active tab


  const navigate = useNavigate();
  const handleSignOut = () => {
    // Perform any sign-out logic here (like clearing auth tokens, etc.)
    
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center justify-between p-6 shadow-md bg-white">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>
          <h1 className="md:text-2xl text-purple-600 text-lg font-semibold">Welcome, Admin</h1>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Admin Photo */}
            <img
  src={img}
  alt='admin'
  className="w-11 h-11 md:w-10 md:h-10 rounded-full border-2 border-white"
/>

            {/* Sign Out Button */}
            <button   onClick={handleSignOut}  className="bg-purple-600 text-white px-4 py-2 rounded  text-md  hover:text-purple-700 hover:bg-white hover:border-2 hover:border-purple-700 ">
              Sign Out
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
              <div className="p-4 bg-white shadow-md rounded-lg border-l-8 border-purple-800">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Booking</h2>
                <p className="text-gray-700 text-sm md:text-base">Total Booking: 14</p>
                <a href="#" className="text-purple-800 hover:underline text-sm md:text-base">
                  View More → 
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-8 border-purple-800">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Buses</h2>
                <p className="text-gray-700 text-sm md:text-base">Total Buses: 140</p>
                <a href="#" className="text-purple-800 hover:underline text-sm md:text-base">
                  View More → 
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-8 border-purple-800">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Routes</h2>
                <p className="text-gray-700 text-sm md:text-base">Total Routes: 120</p>
                <a href="#" className="text-purple-800 hover:underline text-sm md:text-base">
                  View More → 
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-8 border-purple-800">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Passengers</h2>
                <p className="text-gray-700 text-sm md:text-base">Total Passengers: 16</p>
                <a href="#" className="text-purple-800 hover:underline text-sm md:text-base">
                  View More → 
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-8 border-purple-800">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Contact Information</h2>
                <p className="text-gray-700 text-sm md:text-base">Total contact: 14</p>
                <a href="#" className="text-purple-800 hover:underline text-sm md:text-base">
                  View More → 
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-8 border-purple-800">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">User Information</h2>
                <p className="text-gray-700 text-sm md:text-base">Total User: 06</p>
                <a href="#" className="text-purple-800 hover:underline text-sm md:text-base">
                  View More → 
                </a>
              </div>
            </div>
          )}

          {activeTab === 'passengers' && <PassengerTable />}
          {activeTab === 'booking' && <BookingTable />}
          {activeTab === 'buses' && <BusCard />}
          {activeTab === 'addbuses' && <BusForm />}
          {activeTab === 'contactinfo' && <User />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

