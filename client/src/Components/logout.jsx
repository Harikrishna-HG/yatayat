import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token and redirect to login page
    localStorage.removeItem('token');
    toast.success('You have been logged out.');
    navigate('/login');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Logging out...</h2>
      </div>
    </div>
  );
};

export default Logout;
