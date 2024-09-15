import React, { useState, useEffect } from 'react';

const User = ({ isDarkMode }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const onDelete = async (contactId) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return; // Confirmation dialog before delete
    try {
      const response = await fetch(`http://localhost:5000/api/bus/${contactId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete');
      }
      setBuses(contacts.filter(contact => contact._id !== contactId)); // Update state after deletion
    } catch (err) {
      setError('Failed to delete contact');
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/form/contact", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p className="text-purple-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap mb-8 px-2">
      {contacts.length > 0 ? (
        <div className="w-full p-5">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className={`p-4 border-4 rounded shadow-sm bg-white mb-4 ${
                isDarkMode ? "border-white" : "border-purple-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className='px-2 py-4'>
                  <p className="text-purple-700"><span className='text-lg font-bold'>Username: </span>{contact.username}</p>
                  <p className="text-purple-700"><span className='text-lg font-bold'>Email: </span>{contact.email}</p>
                  <p className="text-purple-700"><span className='text-lg font-bold'>Message: </span>{contact.message}</p>
                  </div>
                  <div>
                  <button     onClick={() => onDelete(contact._id)}
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
        <p className="text-white">No message available.</p>
      )}
    </div>
  );
};

export default User;
