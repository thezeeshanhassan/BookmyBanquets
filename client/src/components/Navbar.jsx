import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../public/favicon.png'; // Make sure this path is correct

const Navbar = () => {
  //   const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleDropdownEnter = (item) => {
    setActiveDropdown(item);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Determine active tab based on current route
  const isActive = (path) => {
    return location.pathname === path ? 'text-[#FF477E]' : 'text-gray-800';
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo with favicon */}
        <div className="flex items-center">
          <img src={logo} alt="BmB Logo" className="h-8 w-8 mr-2" />
          <div className="text-2xl font-bold text-gray-800 cursor-pointer">BmB</div>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center space-x-8">
          {/* Home Link */}
          <li>
            <a
              href="/"
              className={`font-medium ${isActive('/')} hover:text-[#FF477E]
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#FF477E] hover:after:w-full after:transition-all after:duration-500
                ${location.pathname === '/' ? 'after:w-full' : ''}`}
            >
              Home
            </a>
          </li>

          {/* Venue Link */}
          <li>
            <a
              href="/venue"
              className={`font-medium ${isActive('/venue')} hover:text-[#FF477E]
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#FF477E] hover:after:w-full after:transition-all after:duration-500
                ${location.pathname === '/venue' ? 'after:w-full' : ''}`}
            >
              Venue
            </a>
          </li>

          {/* Dresses Link */}
          <li>
            <a
              href="/dresses"
              className={`font-medium ${isActive('/dresses')} hover:text-[#FF477E]
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#FF477E] hover:after:w-full after:transition-all after:duration-500
                ${location.pathname === '/dresses' ? 'after:w-full' : ''}`}
            >
              Dresses
            </a>
          </li>

          {/* Contact Link */}
          <li>
            <a
              href="/contact"
              className={`font-medium ${isActive('/contact')} hover:text-[#FF477E]
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#FF477E] hover:after:w-full after:transition-all after:duration-500
                ${location.pathname === '/contact' ? 'after:w-full' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 font-medium 
                  hover:border-[#FF477E] hover:text-[#FF477E] transition-all duration-300 hover:scale-105
                  inline-flex items-center justify-center"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="px-4 py-2 rounded-md bg-[#FF477E] text-white font-medium 
                  hover:bg-[#FF3D6E] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105
                  inline-flex items-center justify-center"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;