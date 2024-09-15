import React from 'react';

const BookingTable = () => {
  // Sample data
  const bookings = [
    { id: 1, name: 'John Doe', dateBooked: '2024-09-01', departureTime: '10:00 AM', status: 'Confirmed' },
    { id: 2, name: 'Jane Smith', dateBooked: '2024-09-02', departureTime: '12:00 PM', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', dateBooked: '2024-09-03', departureTime: '02:00 PM', status: 'Cancelled' },
    { id: 4, name: 'Robert Brown', dateBooked: '2024-09-04', departureTime: '04:00 PM', status: 'Confirmed' },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">ID</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">Name</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">Date Booked</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">Departure Time</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{booking.id}</td>
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{booking.name}</td>
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{booking.dateBooked}</td>
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{booking.departureTime}</td>
              <td className={`py-2 px-4 text-xs md:text-sm ${booking.status === 'Confirmed' ? 'text-green-600' : booking.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                {booking.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;

