import React from 'react';
import { useState } from "react";
import { toast } from 'react-toastify';


function Contact({ isDarkMode }) {
  const [isLoading, setIsLoading] = useState(false);


  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  })
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...user,
      [name]: value,
    });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("Message is successfully sent to the admin");

        setUser({ username: "", email: "", message: "" })
      }
      else {
        toast.error("Invalid type of message");
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };


  return (
    <div>
      <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

      <h2 className={`text-2xl pt-8 text-center uppercase  ${isDarkMode ? "bg-purple-700 text-white" : "text-purple-700 bg-white"}`}>Contact</h2>

      <section id="contact" className={` py-10 px-4 md:px-24${isDarkMode ? "bg-purple-700" : " bg-white"}`}>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 w-1/2 md:pl-12 p-6 md:p-0">
            <img
              className="rounded-xl shadow-xl md:rounded-2xl mx-auto md:mx-0"
              src="https://img.freepik.com/free-vector/young-woman-uses-computer-work-reduce-infection_1150-34985.jpg?t=st=1720269484~exp=1720273084~hmac=f0fee507baf60451e075c41e84da73481f60ea539b415d46095196ee9866ed35&w=740"
              alt="Illustration"
            />
          </div>

          <div className="md:w-1/2 w-1/2 md:pr-12 p-6 md:pl-6 flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-2 ml-2 md:ml-0">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  autoComplete='off'
                  placeholder="Type your full name"
                  className="w-full px-3 py-2 rounded-md border  text-purple-700 border-gray-300"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 ml-2 md:ml-0">Email:</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"

                  value={user.email}
                  onChange={handleInput}

                  placeholder="Type your email"
                  className="w-full px-3 py-2 rounded-md border  text-purple-700 border-gray-300"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 ml-2 md:ml-0">Message:</label>
                <textarea
                  rows="3"
                  placeholder="Type your message"
                  name="message"
                  value={user.message}
                  onChange={handleInput}

                  className="w-full px-3 py-2 rounded-md border text-purple-700 border-gray-300"
                />
              </div>
              <div className="ml-2 md:ml-0">
                <button
                  type='submit'
                  disabled={isLoading}
                  className={`w-full py-2 px-4 rounded-md border-4 border-purple-700 text-purple-700  bg-white   flex items-center justify-center`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;