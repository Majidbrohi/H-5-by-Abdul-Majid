 "use client"
import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown on click
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="  bg-customwhite  font-montserrat font-bold text-xl text-white">
      {/* Top Bar */}
      <div className="hidden sm:flex justify-between bg-green-700 items-center py-2 px-4 text-sm border-b border-gray-700">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image src="/icons/phone.png" alt="Phone Icon" width={16} height={16} />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/icons/email.png" alt="Email Icon" width={16} height={16} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Announcement */}
        <div className="hidden md:block">Follow Us and get a chance to win 80% off</div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <span>Follow Us:</span>
          <a href="#" aria-label="Instagram" className="hover:opacity-75">
            <Image src="/icons/instagram.png" alt="Instagram Icon" width={16} height={16} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-75">
            <Image src="/icons/youtube.png" alt="YouTube Icon" width={16} height={16} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:opacity-75">
            <Image src="/icons/facebook.png" alt="Facebook Icon" width={16} height={16} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-75">
            <Image src="/icons/twitter.png" alt="Twitter Icon" width={16} height={16} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-around text-customDarkBlue items-center py-4 px-4">
        {/* Logo */}
        <div className="text-lg sm:text-2xl font-bold">Bandage</div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 text-customDarkBlue">
          <a href="/" className="hover:text-blue-400">Home</a>
          
          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown} // Toggle dropdown visibility
              className="hover:text-blue-400 focus:outline-none flex items-center space-x-2"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              <Image src="/icons/dropdown.png" alt="Dropdown Icon" width={16} height={16} />
              <span>Shop</span>
            </button>
            {/* Conditionally render dropdown based on isDropdownOpen */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5"
                role="menu"
              >
                <a href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Men</a>
                <a href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kids</a>
                <a href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Brides</a>
                <a href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Girls</a>
              </div>
            )}
          </div>
          
          <a href="/AboutUs" className="hover:text-blue-400">About</a>
          <a href="/Shop" className="hover:text-blue-400">Blog</a>
          <a href="/Contact" className="hover:text-blue-400">Contact</a>
          <a href="/Home" className="hover:text-blue-400">Pages</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Login/Register (Only visible on desktop) */}
          <a href="#" className="hidden sm:flex text-blue-400 hover:text-blue-950">
            Login / Register
          </a>

          {/* Icons for Mobile and Desktop */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <a href="#" aria-label="Cart">
              <Image
                src="/icons/cartforres.png"
                alt="Cart Icon"
                width={24}
                height={24}
                className="block sm:hidden" /* Mobile only */
              />
              <Image
                src="/icons/wishlist.png"
                alt="Wishlist Icon"
                width={50}
                height={50}
                className="hidden sm:block" /* Desktop only */
              />
            </a>

            {/* Magnifier/Search Icon */}
            <a href="#" aria-label="Search">
              <Image
                src="/icons/megniresp.png"
                alt="Search Icon (Mobile)"
                width={24}
                height={24}
                className="block sm:hidden"
              />
              <Image
                src="/icons/search.png"
                alt="Search Icon (Desktop)"
                width={50}
                height={50}
                className="hidden sm:block"
              />
            </a>

            {/* Mobile Menu Icon */}
            <Image
              src="/icons/resmenu.png"
              alt="Menu Icon"
              width={25}
              height={25}
              className="block sm:hidden"
            />
          </div>
        </div>
      </div>

      {/* Vertical Links */}
      <div className="bg-white px-2 py-2 sm:hidden flex items-center justify-center min-h-[30vh]">
        <nav className="space-y-2 font-bold font-bg text-slate-600">
          <a
            href="/"
            className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
          >
            Home
          </a>
          <a
            href="/Shop"
            className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
          >
            Product
          </a>
          <a
            href="/AboutUs"
            className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
          >
            About Us
          </a>
          <a
            href="/Contact"
            className="block text-sm font-medium hover:bg-gray-200 p-2 "
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
