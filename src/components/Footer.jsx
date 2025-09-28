import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-accent dark:bg-gray-800 text-gray-800 dark:text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Institute Info */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-4">
            <img src={logo} alt="IELTS Institute" className="h-12 mr-3" />
            <span className="text-2xl font-bold">IELTS Institute</span>
          </div>
          <p className="text-sm">Your trusted partner in achieving English proficiency and excelling in the IELTS exam.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-300">Courses</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-300">Admission</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2 text-sm">
            <p>123 Education Lane, Knowledge City, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:info@ieltsinstitute.com" className="hover:text-primary dark:hover:text-secondary transition-colors duration-300">info@ieltsinstitute.com</a></p>
          </address>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Replace with actual icons */}
            <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-secondary transition-colors duration-300">FB</a>
            <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-secondary transition-colors duration-300">IN</a>
            <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-secondary transition-colors duration-300">LI</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} IELTS Institute. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
