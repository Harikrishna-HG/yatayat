import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const BusCard = ({ isDarkMode }) => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedBus, setSelectedBus] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handleBookNow = (bus) => {
    setSelectedBus(bus);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = () => {
    if (!paymentMethod || !mobileNumber) {
      toast.error('Please select a payment method and enter your mobile number.');
      return;
    }

    // Simulate sending a verification code
    const dummyVerificationCode = '1234'; // Replace this with actual code generation logic
    setVerificationCode(dummyVerificationCode);

    toast.success('Verification code sent to your mobile number!');
  };

  const handleVerifyCode = () => {
    if (verificationCode === '1234') { // Replace '1234' with the actual code
      setPaymentSuccess(true);
      setShowPaymentModal(false);
      toast.success('Payment Successful! Your booking is confirmed.');

      // Automatically close the "Booking Confirmed" modal after 5 seconds
      setTimeout(() => {
        setPaymentSuccess(false);
      }, 5000);
    } else {
      toast.error('Invalid verification code. Please try again.');
    }
  };

  if (loading) return <p className="text-purple-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap pt-24 mb-8 px-2">
      {buses.length > 0 ? (
        <div className="w-full p-5">
          {buses.map((bus) => (
            <div key={bus._id} className={`p-4 border-4 rounded shadow-sm bg-white mb-4 ${isDarkMode ? "border-white" : "border-purple-700"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-purple-700">Bus Number: {bus.busnumber}</h3>
                  <p className='text-purple-700'>From: {bus.from}</p>
                  <p className='text-purple-700'>To: {bus.to}</p>
                  <p className='text-purple-700'>Type: {bus.bustype}</p>
                  <p className='text-purple-700'>Category: {bus.category}</p>
                  <p className='text-purple-700'>Price: {bus.price}</p>
                  <p className='text-purple-700'>Contact: {bus.contact}</p>
                  <p className='text-purple-700'>Available Seats: {bus.seats}</p>
                </div>
                <button
                  onClick={() => handleBookNow(bus)}
                  className={`px-4 py-2 bg-purple-700 text-white rounded border-4 hover:bg-white hover:text-purple-700 hover:border-purple-700 ${isDarkMode ? "hover:border-purple-700" : "border-white"}`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No buses available.</p>
      )}

      {/* Payment Modal */}
      {showPaymentModal && !paymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Payment Options</h3>
            <p className="mb-2 text-purple-700">Select a payment method:</p>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded mb-4 text-purple-700"
            >
              <option value="">Select a method</option>
              <option value="esewa">eSewa</option>
              <option value="googlePay">Google Pay</option>
              <option value="paypal">PayPal</option>
              <option value="khalti">Khalti</option>
              <option value="phonepe">PhonePe</option>
              <option value="bank">Other Banks</option>
            </select>
            <p className="mb-2 text-purple-700">Enter your mobile number:</p>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full p-2 border rounded mb-4 text-purple-700"
              placeholder="Enter mobile number"
              autoComplete="off"
            />
            <button
              onClick={handlePaymentSubmit}
              className="w-full p-2 bg-purple-700 text-white rounded hover:bg-white border-4  hover:text-purple-700 hover:border-purple-700"
            >
              Send Verification Code
            </button>

            {verificationCode && (
              <>
                <p className="mt-4 mb-2 text-purple-700">Enter verification code:</p>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full p-2 border rounded mb-4 text-purple-700"
                  placeholder="Enter verification code"
                  autoComplete="off"
                />
                <button
                  onClick={handleVerifyCode}
                  className="w-full p-2 bg-purple-700 text-white rounded border-4 hover:bg-white hover:text-purple-700 hover:border-purple-700"
                >
                  Verify Code
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {paymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold text-purple-700 mb-4 ">Booking Confirmed</h3>
            <p className="text-purple-700">Your payment was successful and your booking is confirmed!</p>
            <button
              onClick={() => setPaymentSuccess(false)}
              className="w-full p-2 bg-purple-700 text-white rounded hover:bg-white hover:text-purple-700 border-4 hover:border-purple-700 mt-4"
            >
              Booked
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusCard;
