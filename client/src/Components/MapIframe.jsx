import React from 'react';

const MapIframe = ({ height = '450px', isDarkMode } ) => {
  return (
    <>       
                  <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />


    <div className={`w-full  rounded-lg shadow-3xl `} style={{ height: height }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1508.121395314806!2d80.17872152846158!3d28.971786557143737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ab891b657d15%3A0xd7dfb3f347c7f594!2sBuspark%20%2C%20mahendranagar!5e0!3m2!1sen!2snp!4v1722010774898!5m2!1sen!2snp"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      />
    </div>
    </>
  );
};

export default MapIframe;
