import React, { useState } from 'react'
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-900 w-full h-[9%] flex items-center justify-between px-4">
      
      {/* Left side: Logo + Title */}
      <div className="flex items-center gap-3">
        <img src={logo} className="h-16 w-16" alt="Logo" />
        <span className="text-white text-lg font-semibold">IELTS Institute</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <button className="h-10 w-24 border-2 text-white rounded-md hover:bg-blue-900">Courses</button>
        <button className="h-10 w-24 border-2 text-white rounded-md hover:bg-blue-900">Admission</button>
        <button className="h-10 w-24 border-2 text-white rounded-md hover:bg-blue-900">About Us</button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 flex flex-col space-y-4 p-4 rounded-md shadow-lg md:hidden">
          <button className="h-10 w-full border-2 pl-2 pr-2 text-white rounded-md hover:bg-blue-900">Courses</button>
          <button className="h-10 w-full border-2 pl-2 pr-2 text-white rounded-md hover:bg-blue-900">Admission</button>
          <button className="h-10 w-full border-2 pl-2 pr-2 text-white rounded-md hover:bg-blue-900">About Us</button>
        </div>
      )}
    </div>
  )
}

export default Navbar
