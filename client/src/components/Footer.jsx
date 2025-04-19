import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Logo */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">BmB</h1>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#FF477E] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FF477E] transition-colors">About</Link></li>
              <li><Link to="/halls" className="hover:text-[#FF477E] transition-colors">Halls</Link></li>
            </ul>
          </div>
          
          {/* My Account */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">My Account</h2>
            <ul className="space-y-2">
              <li><Link to="/account" className="hover:text-[#FF477E] transition-colors">My Account</Link></li>
              <li><Link to="/bookings" className="hover:text-[#FF477E] transition-colors">Booking History</Link></li>
              <li><Link to="/faqs" className="hover:text-[#FF477E] transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div className="col-span-1 md:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full max-w-md rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-[#FF477E] hover:bg-[#FF3D6E] px-6 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-400">Get product updates</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 BookMyBanquets. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;