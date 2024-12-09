 "use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-customwhite font-montserrat font-bold text-xl text-white">
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
          <Link href="https://instagram.com" aria-label="Instagram" passHref>
            <Image src="/icons/instagram.png" alt="Instagram Icon" width={16} height={16} />
          </Link>
          <Link href="https://youtube.com" aria-label="YouTube" passHref>
            <Image src="/icons/youtube.png" alt="YouTube Icon" width={16} height={16} />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook" passHref>
            <Image src="/icons/facebook.png" alt="Facebook Icon" width={16} height={16} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" passHref>
            <Image src="/icons/twitter.png" alt="Twitter Icon" width={16} height={16} />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-around text-customDarkBlue items-center py-4 px-4">
        {/* Logo */}
        <div className="text-lg sm:text-2xl font-bold">Bandage</div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 text-customDarkBlue">
          <Link href="/" className="hover:text-blue-400">Home</Link>

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
                <Link href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Men</Link>
                <Link href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kids</Link>
                <Link href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Brides</Link>
                <Link href="/Shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Girls</Link>
              </div>
            )}
          </div>

          <Link href="/AboutUs" className="hover:text-blue-400">About</Link>
          <Link href="/Shop" className="hover:text-blue-400">Blog</Link>
          <Link href="/Contact" className="hover:text-blue-400">Contact</Link>
          <Link href="/Home" className="hover:text-blue-400">Pages</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Login/Register (Only visible on desktop) */}
          <Link href="#" className="hidden sm:flex text-blue-400 hover:text-blue-950">
            Login / Register
          </Link>

          {/* Icons for Mobile and Desktop */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link href="#" aria-label="Cart">
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
            </Link>

            {/* Magnifier/Search Icon */}
            <Link href="#" aria-label="Search">
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
            </Link>

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
          <Link
            href="/"
            className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
          >
            Home
          </Link>
          <Link
            href="/Shop"
            className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
          >
            Product
          </Link>
          <Link
            href="/AboutUs"
            className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
          >
            About Us
          </Link>
          <Link
            href="/Contact"
            className="block text-sm font-medium hover:bg-gray-200 p-2 "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
