import React, { useState } from 'react';
import logo from '../assets/logo1.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-accent dark:bg-gray-900 w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={logo} className="h-16 w-16" alt="Logo" />
            <span className="text-gray-800 dark:text-white text-xl font-semibold">IELTS Institute</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300">Courses</a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300">Admission</a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300">About Us</a>
            <button onClick={toggleTheme} className="h-10 w-24 border-2 border-primary dark:border-secondary text-primary dark:text-secondary rounded-md hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition-colors duration-300">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-accent dark:bg-gray-800 pb-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300">Courses</a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300">Admission</a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300">About Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
