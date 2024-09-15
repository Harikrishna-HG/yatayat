import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBus = () => {
  const { id } = useParams(); // Get the bus ID from the URL
  const navigate = useNavigate(); // Navigation hook
  const [bus, setBus] = useState(null); // Initialize with null until data is fetched
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(bus); // Debugging log to see the bus data

    // Fetch the current bus details
    const fetchBus = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/bus/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBus(data); // Update state with fetched bus details
      } catch (err) {
        setError('Failed to fetch bus details');
      } finally {
        setLoading(false);
      }
    };

    fetchBus();
  }, [id]);

  // Handle form submission to update the bus
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/bus/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bus),
      });
      if (!response.ok) {
        throw new Error('Failed to update bus');
      }
      navigate('/'); // Redirect back to the home page after successful update
    } catch (err) {
      setError('Failed to update bus');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Only render the form if the bus data is available
  if (!bus) {
    return <p>No bus data available to update.</p>;
  }

  return (
    <div className="flex flex-col border-4 border-purple-700 items-center justify-center min-h-screen  bg-purple-700">
      <form onSubmit={handleSubmit} className="bg-white p-6 ml-48 rounded border-4 border-purple-700 shadow-md w-full max-w-lg">
        <h1 className="text-2xl mb-4  text-purple-700">Update Bus</h1>

        <label className="block mb-2 text-purple-700 ">Bus Number:</label>
        <input
          type="text"
          name="busnumber"
          value={bus.busnumber || ''}
          onChange={handleChange}
          className="border p-2 w-full text-purple-700"
        />

        <label className="block mb-2 text-purple-700 ">Type:</label>
        <input
          type="text"
          name="bustype"
          value={bus.bustype || ''}
          onChange={handleChange}
          className="border p-2 w-full text-purple-700"
        />

        <label className="block mb-2 text-purple-700 ">Category:</label>
        <input
          type="text"
          name="category"
          value={bus.category || ''}
          onChange={handleChange}
          className="border p-2 w-full text-purple-700"
        />

        <label className="block mb-2 text-purple-700 ">Price:</label>
        <input
          type="text"
          name="price"
          value={bus.price || ''}
          onChange={handleChange}
          className="border p-2 w-full text text-purple-700"
        />

        <label className="block mb-2 text-purple-700 ">Contact:</label>
        <input
          type="text"
          name="contact"
          value={bus.contact || ''}
          onChange={handleChange}
          className="border p-2 w-full text-purple-700"
        />

        <label className="block mb-2 text-purple-700 ">Available Seats:</label>
        <input
          type="number"
          name="seats"
          value={bus.seats || ''}
          onChange={handleChange}
          className="border p-2 w-full text-purple-700"
        />

        <button type="submit" className="px-4 py-2 bg-purple-700  text-white rounded-lg border-4  hover:bg-white  hover:text-purple-700 hover:border-purple-700">
          Update Bus
        </button>
      </form>
    </div> 
  );
};

export default UpdateBus;
