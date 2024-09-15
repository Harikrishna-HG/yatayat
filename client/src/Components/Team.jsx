import React from 'react';
import microsoftLogo from '../assets/microsoft-logo.png'; // Adjust the path as needed
import linkedinLogo from '../assets/linkedin-logo.png'; // Adjust the path as needed
import instagramLogo from '../assets/instagram-logo.png'; // Adjust the path as needed
import harikrishna from '../assets/profile.jpg'
import saurav from '../assets/saurav.jpeg';
import mukesh from '../assets/mukesh.jpeg';
import sujit from '../assets/sujit.jpeg';
import janak from '../assets/janak.jpeg';

const developers = [
  {
    name: 'Harikrishna Gautam',
    role: 'Software Developer',
    image:  harikrishna, // Adjust the path as needed
    social: {
      microsoft: 'https://www.microsoft.com',
      linkedin: 'https://www.linkedin.com/in/harikrishna2002/',
      instagram: 'https://www.instagram.com/harikrishna'
    }
  },
  {
    name: 'Saurav Bhat',
    role: 'Backend Developer',
    image:  saurav, // Adjust the path as needed
    social: {
      microsoft: 'https://www.microsoft.com',
      linkedin: 'https://www.linkedin.com/in/harikrishna2002/',
      instagram: 'https://www.instagram.com/harikrishna'
    }
  },
  {
    name: 'Mukesh Mahata',
    role: 'FrontEnd Developer',
    image:  mukesh, // Adjust the path as needed
    social: {
      microsoft: 'https://www.microsoft.com',
      linkedin: 'https://www.linkedin.com/in/harikrishna2002/',
      instagram: 'https://www.instagram.com/harikrishna'
    }
  },
  {
    name: 'Janak Nath',
    role: 'System Designer',
    image:  janak, // Adjust the path as needed
    social: {
      microsoft: 'https://www.microsoft.com',
      linkedin: 'https://www.linkedin.com/in/harikrishna2002/',
      instagram: 'https://www.instagram.com/harikrishna'
    }
  },
  {
    name: 'Sujit BK',
    role: 'Graphic Designer',
    image:  sujit, // Adjust the path as needed
    social: {
      microsoft: 'https://www.microsoft.com',
      linkedin: 'https://www.linkedin.com/in/harikrishna2002/',
      instagram: 'https://www.instagram.com/harikrishna'
    }
  },
  // Add more developer profiles here
];

const Team = ({isDarkMode}) => {
  return (<>
    <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

    <section className={`py-12 mt-12 bg-gray-100 ${isDarkMode ? "bg-purple-700 text-white":"bg-white text-purple-700"}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? " text-white":" text-purple-700"}`} >Meet Our Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-purple-700">
              <div className="relative">
                <img
                  // src={developers.image}
                  // alt={dev.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={dev.image}
                    alt={dev}
                    className="w-40 h-40 rounded-full border-4 border-white"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{dev.name}</h3>
                <p className="text-gray-600 mb-4">{dev.role}</p>
                <div className="flex justify-center gap-4">
                  {dev.social.microsoft && (
                    <a href={dev.social.microsoft} target="_blank" rel="noopener noreferrer">
                      <img src={microsoftLogo} alt="Microsoft" className="w-8 h-8" />
                    </a>
                  )}
                  {dev.social.linkedin && (
                    <a href={dev.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
                    </a>
                  )}
                  {dev.social.instagram && (
                    <a href={dev.social.instagram} target="_blank" rel="noopener noreferrer">
                      <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
