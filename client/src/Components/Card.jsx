import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

const Card = ({ isDarkMode }) => {
  return (<>
    <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

    <div className={`font-sans py-8 ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`}>
      <section id="card">
        <h2 id="title" className={`text-center  text-2xl mb-8 ${isDarkMode ? " text-white" : "text-purple-700"}`}>TOP DESTINATIONS</h2>

        <div className={`flex flex-wrap justify-center p-2 ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`}>
          <div className={`w-60 bg-purple-400  border-2 rounded-lg overflow-hidden shadow-md m-4 `}>
            <img src={img1} alt="Swayambhunath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Swayambhunath</h3>
              <p className="text-sm mb-4">
              Swayambhunath Stupa, a UNESCO World Heritage Site, is a sacred Buddhist site in Nepal. It has a white dome and golden spire.              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img2} alt="Boudhanath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Boudhanath</h3>
              <p className="text-sm mb-4">
              Boudhanath stupa, world's largest Tibetan Buddhist stupa, Kathmandu, Nepal. A UNESCO World Heritage Site, it's a major pilgrimage site.              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img3} alt="Dharahara" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Dharahara</h3>
              <p className="text-sm mb-4">
              Dharahara, a historic tower in Kathmandu, Nepal, was destroyed  earthquake. It was rebuilt in 2018 and now stands taller than its previous height.
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img4} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Pashupatinath</h3>
              <p className="text-sm mb-4">
              Pashupatinath Temple, a UNESCO World Heritage Site, is a sacred Hindu temple in Kathmandu. Dedicated to Lord Shiva and cremation grounds.
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img7} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Adiyogi Shiva</h3>
              <p className="text-sm mb-4">
              Adiyogi Shiva, the first yogi and the source of all yoga, is revered in Hinduism. He is often depicted as a powerful deity with a trident
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img6} alt="Tripura" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Tripura Mandir</h3>
              <p className="text-sm mb-4">
              Tripura Sundari Temple, also known as Tripura Mandir, is a Hindu temple to Goddess Tripura Sundari. It is located in Baitadi district.
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img8} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Haridwar</h3>
              <p className="text-sm mb-4">
              Haridwar is a significant Hindu pilgrimage site located in the state of Uttarakhand, India. It is situated on the banks of the Ganges River
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 border-2 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img9} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Mount Kailash</h3>
              <p className="text-sm mb-4">
              Mount Kailash is a sacred mountain in Tibet, China. It is considered one of the most holy places in Hinduism, Buddhism, Jainism, and Bon.
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default Card;
