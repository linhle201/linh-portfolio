import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative fixed w-full text-white z-10">
      <nav className="text-1xl">
        <div className="flex justify-between items-center px-8 py-3">
          {/* Desktop View */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="font-bold text-gray-800">
              Web Developer - UI/UX Designer
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8">

            <Link to="/contact" className="py-2 text-red-300 text-sm px-5">Contact</Link>
          </div>

          {/* Mobile View (Hamburger Button) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white flex flex-col justify-center items-center space-y-1"
            >
              <div className="w-6 h-1 bg-red-400"></div>
              <div className="w-6 h-1 bg-red-400"></div>
              <div className="w-6 h-1 bg-red-400"></div>
            </button>
            <div className="ml-2 text-sm">
              <Link to="/" className="font-bold text-gray-800">
                Web Developer - UI/UX Designer
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-0 left-0 w-1/3 h-full bg-black transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out space-y-2 px-8 py-4`}
        >
          {/* Close Button for Sidebar */}
          <button
            onClick={toggleMobileMenu}
            className="text-red-200 text-3xl absolute top-4 right-4"
          >
            ×
          </button>

          {/* Mobile Navigation Links */}
          <Link
            to="/"
            className="text-red-200 text-sm text-center bg-black px-1 py-1 block transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 rounded-lg"
          >
            Home
          </Link>
          
          <Link
            to="/contact"
            className="text-red-200 text-sm text-center bg-black px-1 py-1 block transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 rounded-lg"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;