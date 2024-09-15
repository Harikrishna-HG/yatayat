import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BusCard = ({ isDarkMode }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/users", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBuses(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  // Handle navigation to Update Bus page
  const handleUpdate = (busId) => {
    navigate(`/update-bus/${busId}`); // Use navigate function to redirect
  };

  const onDelete = async (busId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bus/${busId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete');
      }
      setBuses(buses.filter(bus => bus._id !== busId)); // Update state after deletion
    } catch (err) {
      setError('Failed to delete bus');
    }
  };

  if (loading) return <p className="text-purple-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap mb-8 px-2">
      {buses.length > 0 ? (
        <div className="w-full p-5">
          {buses.map((bus) => (
            <div key={bus._id} className={`p-4 border-4 rounded shadow-sm bg-white mb-4 ${isDarkMode ? "border-white" : "border-purple-700"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-purple-700">Bus Number: {bus.busnumber}</h3>
                  <p className="text-purple-700">Type: {bus.bustype}</p>
                  <p className="text-purple-700">From: {bus.from}</p>
                  <p className="text-purple-700">To: {bus.to}</p>
                  <p className="text-purple-700">Category: {bus.category}</p>
                  <p className="text-purple-700">Price: {bus.price}</p>
                  <p className="text-purple-700">Contact: {bus.contact}</p>
                  <p className="text-purple-700">Available Seats: {bus.seats}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleUpdate(bus._id)} // Redirect to update page with bus ID
                    className={`px-4 py-2 bg-purple-700 text-white rounded border-4 hover:bg-white hover:border-purple-600 hover:text-purple-700 ${isDarkMode ? "hover:border-purple-700" : "border-white"}`}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(bus._id)}
                    className={`px-4 py-2 bg-purple-700 text-white rounded border-4 hover:bg-white  hover:border-purple-600 hover:text-purple-700 ${isDarkMode ? "hover:border-purple-700" : "border-white"}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No user available.</p>
      )}
    </div>
  );
};

export default BusCard;

