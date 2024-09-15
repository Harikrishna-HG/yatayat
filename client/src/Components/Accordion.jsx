import React, { useState } from 'react';

const Accordion = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage which FAQ is open

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />
      <section id="accordion" className={`p-4 px-8 md:px-14 flex flex-col items-center ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`}>
        <h2 className={`text-2xl py-4 text-center my-4 uppercase ${isDarkMode ? " text-white" : "text-purple-700"}`}>FAQs</h2>
        <div className={`pb-12 border-4 mb-5  ${isDarkMode ? " border-white":"border-purple-700"}`}>
          {faqData.map((faq, index) => (
            <div key={index} className={`max-w-full my-6 px-6 py-2 border-b-2 ${isDarkMode ? " border-white":"border-purple-700"} cursor-pointer text-white`}>
              <div className="flex  justify-between items-center" onClick={() => toggleAnswer(index)}>
                <h3 className={`text-xl   ${isDarkMode ? " text-white" : "text-purple-700"}`}>{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  fill="white"
                  viewBox="0 -960 960 960"
                  width="30"
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className={`text-md  ${isDarkMode ? " text-white" : "text-purple-700"}`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    question: 'What is Transportation?',
    answer: 'Transportation is the movement of people, animals, or goods from one location to another.Transportation plays a crucial role in our daily lives, enabling us to travel, trade, and access goods and services. It has also been a major driver of economic growth and development throughout history.',
  },
  {
    question: 'Do I Need To Register To Use Transportation?',
    answer: 'The benefits of transportation must be weighed against its environmental and social costs. The burning of fossil fuels for transportation contributes significantly to greenhouse gas emissions and climate change. Traffic congestion, noise pollution, and accidents also pose serious challenges to urban areas. Addressing these issues requires sustainable transportation solutions, such as investing in public transit, promoting electric vehicles, and improving infrastructure.',
  },
  {
    question: 'How Will I Get Confirmation That My Ticket Purchased?',
    answer: 'transportation is a vital component of modern society, shaping our economies, cultures, and daily lives. While it has numerous benefits, it is essential to consider its environmental and social impacts. By adopting sustainable transportation practices, we can ensure that this essential service continues to benefit society while minimizing its negative consequences.',
  },
  {
    question: 'How Can I Make Payments?',
    answer: 'Payment methods have evolved significantly in recent years, offering consumers a wide range of options for online transactions. Credit and debit cards remain popular choices due to their widespread acceptance and convenience. Digital wallets like PayPal, Google Pay, and Apple Pay have gained traction, providing a secure and streamlined payment experience. Online banking allows for direct transfers between accounts, while cryptocurrencies offer a decentralized and potentially more anonymous alternative. Gift cards and prepaid cards are often used for specific purchases or as gifts. Mobile payments, such as those offered by Venmo and Cash App, have become increasingly popular for peer-to-peer transactions and in-store purchases. The best payment method for you depends on your personal preferences, the available options, and your security concerns.',
  },
  {
    question: 'What Details Do I Need To Give At The Time Of Booking/Buying?',
    answer: 'Your name, contact information (phone number, email address), and possibly a physical address. Credit or debit card details, or information for other payment methods you choose. The desired date, time, and location for your purchase or service. Depending on the purchase, you may need to provide specific details such as the number of items, sizes, or desired options.',
  },
];

export default Accordion;