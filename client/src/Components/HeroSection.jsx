import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'react-toastify';

const HeroSection = ({ isDarkMode }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const notify = () => toast.promise("Book your seat now");

  const handleBookNow = () => {
    navigate('/booknow'); // it navigate to the BookNow page
    notify(); 
  };

 
  return (<>
              <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

    <section className={`${isDarkMode ? "bg-purple-700 text-white" : "bg-white text-purple-700"} pb-20 pt-32 px-4 md:px-24`}>
      
      <div className="flex flex-col md:flex-row items-center justify-center py-4">
        {/* Left Section (Text Content) */}
        <div className="md:w-1/2 md:pr-12">
          <h1 className={`text-3xl md:text-3xl lg:text-3xl font-bold mb-5 ${isDarkMode ? "text-white" : "text-purple-700"}`}>4536+ Buses listed</h1>
          <h2 className={`text-4xl md:text-4xl lg:text-4xl font-extrabold mb-5 ${isDarkMode ? "text-white" : "text-purple-700"}`}>Find yourself Best Seat</h2>
          <p className={`text-lg md:text-xl lg:text-xl mb-10 ${isDarkMode ? "text-white" : "text-purple-700"}`}>We provide online bus tickets with good price that suits you.</p>
          <button 
            className={`p-3 md:p-3 rounded-lg hover:bg-purple-700 hover:border hover:text-white ${isDarkMode ? "text-purple-700 bg-white" : "bg-purple-700 text-white"}`} 
            onClick={handleBookNow} // Attach the click handler
          >
            Book Your Seat
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img className="rounded-xl shadow-xl md:rounded-2xl" src="https://img.freepik.com/free-vector/city-bus-concept-illustration_114360-14723.jpg" alt="Illustration" />
        </div>
      </div>
    
    </section></>
  );
};

export default HeroSection;
