import React, { useState, useEffect } from 'react';

const User = ({ isDarkMode }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/users", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-purple-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap mb-8 px-2">
      {users.length > 0 ? (
        <div className="w-full p-5">
          {users.map((user) => (
            <div
              key={user._id}
              className={`p-4 border-4 rounded shadow-sm bg-white mb-4 ${
                isDarkMode ? "border-white" : "border-purple-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className='px-2 py-4'>
                  <p className="text-purple-700"><span className='text-lg font-bold'>Username: </span>{user.username}</p>
                  <p className="text-purple-700"><span className='text-lg font-bold'>Email: </span>{user.email}</p>
                  <p className="text-purple-700"><span className='text-lg font-bold'>Phone: </span>{user.phone}</p>
                  </div>
                  <div>
                  <button
                    className={`px-4 py-2 bg-purple-700  text-white rounded-lg border-4  hover:bg-white  hover:text-purple-700 hover:border-purple-700`}
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

export default User;
