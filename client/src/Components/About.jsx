import React from 'react';

const About = ({ isDarkMode } ) => {
  return (
    <div >
              <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

<section className=" text-center py-6 px-1 " id="services">
        <h2 className={`text-2xl  uppercase p-4 ${isDarkMode ? " text-white" :  "text-purple-700"}`}>Our Services</h2>
        <div className="flex flex-wrap  justify-center items-center p-8 text-white">
          <div className="bg-white border-4 border-purple-700 text-black w-80 rounded-lg p-5 m-4 shadow-md">
            <h3 className="text-purple-700 text-2xl mb-2">Toplevel Safety</h3>
            <p className="text-lg mb-4">
            Top-level safety is a comprehensive approach to ensuring well-being and protection for all. It involves physical, psychological, environmental, social, and economic factors.            </p>
            <a href="#" className="border-2 border-purple-700 rounded-md px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">More</a>
          </div>
          <div className="bg-white  border-4 border-purple-700 text-black w-72 rounded-lg p-5 m-4 shadow-md">
            <h3 className="text-purple-700 text-2xl mb-2">Luxury Seats</h3>
            <p className="text-lg mb-4">
            Luxury seats offer a premium travel experience with enhanced comfort and features. They typically include amenities legroom, reclining capabilities, adjustable headrests.            </p>
            <a href="#" className="border-2 border-purple-700 rounded-md px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">More</a>
          </div>
          <div className="bg-white border-4 border-purple-700 text-black w-80 rounded-lg p-5 m-4 shadow-md">
            <h3 className="text-purple-700 text-2xl mb-2">24*7 Service</h3>
            <p className="text-lg mb-4">
            24/7 service means that a business or service is available around the clock, every day of the week.It is often associated with essential services like customer support, and healthcare.            </p>
            <a href="#" className="border-2 border-purple-700 rounded-md px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">More</a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
