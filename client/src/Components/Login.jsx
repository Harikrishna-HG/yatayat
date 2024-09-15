import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import loginImage from '../assets/img5.jpg'; 
import { toast } from 'react-toastify';
import googleLogo from '../assets/google-icon.svg'; 
import microsoftLogo from '../assets/microsoft-icon.svg';

const Login = ({ isDarkMode }) => {
  const { login } = useContext(AuthContext); // Use context for login
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 
  const [user, setUser] = useState({  
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token);  // Update the token and isLoggedIn state using context

        if (user.email === 'admin@gmail.com' && user.password === 'admin') {
          navigate('/admin');
        } else {
          toast.success("Login Successful");
          navigate("/");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <section className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-purple-700" : "bg-white"}`}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        
        {/* Left Section (Image) */}
        <div className="md:w-1/2 p-1 m-4">
          <img
            className="rounded-xl shadow-xl w-full h-auto"
            src={loginImage}
            alt="Login Illustration"
          />
        </div>

        {/* Right Section (Login Form) */}
        <div className={`md:w-1/2 p-6 md:pl-12 border-4 border-purple-700 bg-white rounded-lg shadow-lg text-purple-700 ${isDarkMode ? "bg-purple-700" : "bg-white"}`}>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className={`block mb-2 ${isDarkMode ? "text-purple-700" : "text-purple-700"}`}>Email:</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={handleInput}
                autoComplete='off'
                className="w-full px-4 py-2 rounded-md border border-gray-300"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-purple-700">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={user.password}
                onChange={handleInput}
                autoComplete='off'
                className="w-full px-4 py-2 rounded-md border border-gray-300"
              />
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md text-white bg-purple-700 flex items-center justify-center mb-4`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Signup Button */}
          <button
            onClick={handleSignupClick} // Navigate to signup
            className={`w-full py-2 px-4 rounded-md text-white bg-purple-700 flex items-center justify-center mb-4`}
          >
            Make a new account
          </button>

          {/* Social Login Buttons */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md">
              <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
              Login with Google
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md">
              <img src={microsoftLogo} alt="Microsoft Logo" className="w-6 h-6 mr-2" />
              Login with Microsoft
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
