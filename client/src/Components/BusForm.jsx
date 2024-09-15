import React, { useState } from 'react';

export const BusForm = () => {
  const [user, setUser] = useState({
    busnumber: "",
    from: "",
    to: "",
    bustype: "",
    category: "",
    price: "",
    contact: "",
    seats: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:5000/api/bus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          busnumber: "",
          from: "",
          to: "",
          bustype: "",
          category: "",
          price: "",
          contact: "",
          seats: ""
        });
        console.log("Data submitted successfully:", await response.json());
      } else {
        alert("Form failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div>
      <div className="p-2 bg-purple-700">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
        <div>
          <label className="block text-purple-700">Bus Number:</label>
          <input
            type="text"
            name="busnumber"
            value={user.busnumber}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">From:</label>
          <input
            type="text"
            name="from"
            value={user.from}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">To:</label>
          <input
            type="text"
            name="to"
            value={user.to}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">Bus Type:</label>
          <input
            type="text"
            name="bustype"
            value={user.bustype}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">Category:</label>
          <input
            type="text"
            name="category"
            value={user.category}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">Price:</label>
          <input
            type="number"
            name="price"
            value={user.price}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">Contact:</label>
          <input
            type="number"
            name="contact"
            value={user.contact}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <div>
          <label className="block text-purple-700">Available Seats:</label>
          <input
            type="number"
            name="seats"
            value={user.seats}
            onChange={handleInput}
            className="w-full p-2 border rounded text-purple-700"
          />
        </div>
        <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Save
        </button>
      </form>
      </div>
    </div>
  );
};

export default BusForm;
