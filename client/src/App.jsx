import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import BookNow from "./Components/BookNow";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card";
import About from "./Components/About";
import Accordion from "./Components/Accordion";
import Contact from "./Components/Contact";
import Page from "./Components/Page";
import MapIframe from "./Components/MapIframe";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import BusCard from "./Components/BusCard";
import Team from "./Components/Team";
import Dashboard from "./Components/Dashboard"; // Admin dashboard
import PassengerTable from "./Components/PassengerTable";
import ContactInfo from "./Components/ContactInfo";
import BusForm from "./Components/BusForm";
import BusInfo from "./Components/BusInfo"
import UpdateBus from "./Components/UpdateBus";
import { AuthProvider } from './context/AuthContext';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <MainContent 
          isMenuOpen={isMenuOpen} 
          isDarkMode={isDarkMode} 
          toggleMenu={toggleMenu} 
          toggleDarkMode={toggleDarkMode} 
        />
      </AuthProvider>
    </BrowserRouter>
  );
};

const MainContent = ({ isMenuOpen, isDarkMode, toggleMenu, toggleDarkMode }) => {
  const location = useLocation();
  
  // Check if the route is one of the admin-related routes
  const isAdminRoute = ['/admin', '/passengers', '/contactinfo', '/routes', '/buses', '/seats', '/addbuses'].includes(location.pathname) ||
    location.pathname.startsWith('/update-bus/'); // Check for routes like /update-bus/:id

  return (
    <div className={isDarkMode ? "bg-purple-700 text-white" : "bg-white text-purple-700"}>
      {!isAdminRoute && (
        <NavBar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><HeroSection isDarkMode={isDarkMode} /><Card isDarkMode={isDarkMode} /><About isDarkMode={isDarkMode} /><Accordion isDarkMode={isDarkMode} /><Contact isDarkMode={isDarkMode} /></>} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        <Route path="/bussearch" element={<BookNow isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<><Page /><Card isDarkMode={isDarkMode} element='pt-20' /><About isDarkMode={isDarkMode} /></>} />
        <Route path="/accordion" element={<Accordion isDarkMode={isDarkMode} />} />
        <Route path="/contact" element={<><Contact isDarkMode={isDarkMode} /><Team isDarkMode={isDarkMode} /></>} />
        <Route path="/pages" element={<Team isDarkMode={isDarkMode} />} />
        <Route path="/signup" element={<Signup isDarkMode={isDarkMode} />} />
        <Route path="/faq" element={<Accordion isDarkMode={isDarkMode} />} />
        <Route path="/services" element={<><About isDarkMode={isDarkMode} /><Accordion isDarkMode={isDarkMode} /></>} />
        <Route path="/bus" element={<><BusCard isDarkMode={isDarkMode} /></>} />
        <Route path="/team" element={<><Team isDarkMode={isDarkMode} /></>} />
        <Route path="/booknow" element={<><BusCard /></>} />

        {/* Admin Routes without NavBar, MapIframe, Footer */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/passengers" element={<><Dashboard /></>} />
        <Route path="/contactinfo" element={<><Dashboard /></>} />
        <Route path="/buses" element={<><Dashboard /></>} />
        <Route path="/addbuses" element={<><Dashboard /></>} />
        <Route path="/update-bus/:id" element={<><Dashboard /><UpdateBus /></>} />    
          </Routes>

      {!isAdminRoute && <MapIframe />}
      {!isAdminRoute && <Footer isDarkMode={isDarkMode} />}
    </div>
  );
};

export default App;
