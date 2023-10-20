import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavLinkClick = () => {
    toggleSidebar();
    scrollToTop();
  };

  const scrollToTop = () => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  };


  
  return (
    <nav className="navbar">
         
  
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
  
      
      <ul className={`navbar-links ${isSidebarOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/algorithms" onClick={handleNavLinkClick}>
            Algortihms
          </NavLink>
        </li>
        <li>
          <NavLink to="/coding" onClick={handleNavLinkClick}>
            Coding 
          </NavLink>
        </li>
        <li>
          <NavLink to="/interview" onClick={handleNavLinkClick}>
            Interview
          </NavLink>
        </li>
       
        <li>
          <NavLink to="/login" onClick={handleNavLinkClick}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;