import React, { useState } from 'react';
import googleLogo from '../assets/google-icon.svg'; // Ensure you have the logo assets
import microsoftLogo from '../assets/microsoft-icon.svg';
import signupImage from '../assets/siting.avif'; // Your uploaded image
import { Navigate } from 'react-router-dom'; // Import the hook for navigation
import { toast } from 'react-toastify';


const Signup = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });



  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...user,
      [name]: value,
    });



  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Implement your signup logic here (API calls, validation, etc.)
    }, 20);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("User Registered Successfully");

        setUser({ username: "", email: "", phone: "", password: "" })
      Navigate("/login");
      }
      else {
        toast.error("Invalid credentials");
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div>
      <section className={` pt-24 pb-8 flex items-center justify-center ${isDarkMode ? "bg-purple-700" : "bg-white"}`}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">



          {/* Right Section (Signup Form) */}
          <div className={` border-purple-700  border-4
            
            
            
            
            md:w-1/2 p-6 md:pl-12 bg-white rounded-lg shadow-lg ${isDarkMode ? "bg-purple-700 text-white" : "bg-white text-black"}`}>
            <h2 className="text-2xl font-bold mb-6 text-center  text-purple-700">Signup Form</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2  text-purple-700">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  autoComplete='off'

                  placeholder="Enter your username"
                  className="w-full px-4 py-2 rounded-md border  text-purple-700 border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2  text-purple-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  autoComplete='off'

                  placeholder="Enter your phone"
                  className="w-full px-4 py-2 rounded-md border text-purple-700 border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-purple-700">Phone:</label>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  autoComplete='off'

                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 rounded-md border text-purple-700 border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-purple-700">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  autoComplete='off'

                  onChange={handleInput}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-md border text-purple-700 border-gray-300"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 rounded-md text-white bg-purple-700 flex items-center justify-center mb-4"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                    Signing up...
                  </>
                ) : (
                  "Signup"
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 ">
              <button className=" text-purple-700 flex items-center justify-center w-full px-4 py-2 border rounded-md">
                <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
                Signup with Google
              </button>
              <button className="  text-purple-700 flex items-center justify-center w-full px-4 py-2 border rounded-md">
                <img src={microsoftLogo} alt="Microsoft Logo" className="w-6 h-6 mr-2" />
                Signup with Microsoft
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
