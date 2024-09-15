import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const BusCard = ({ isDarkMode }) => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bus", {
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

  const onDelete = async (busId) => {
    if (!window.confirm('Are you sure you want to delete this bus?')) return; // Confirmation dialog before delete
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
                  {/* Link to the UpdateBus page with bus._id */}
                  <Link to={`/update-bus/${bus._id}`} >
                   <button  className="px-4 py-2 bg-purple-700  text-white rounded-lg border-4  hover:bg-white  hover:text-purple-700 hover:border-purple-700"> Edit Bus</button>
                  </Link>
                 

                  <button
                    onClick={() => onDelete(bus._id)}
                    className="px-4 py-2 bg-purple-700  text-white rounded-lg border-4  hover:bg-white  hover:text-purple-700 hover:border-purple-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-purple-700">No buses available.</p> 
      )}
    </div>
  );
};

export default BusCard;
