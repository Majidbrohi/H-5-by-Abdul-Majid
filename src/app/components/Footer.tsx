import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customwhite  text-customDarkBlue py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* New Section: Heading on the left, logos on the right */}
        <div className="flex justify-around  py-3 items-center mb-8">
          <h4 className="text-lg font-semibold">Bandage</h4>
          <div className="flex space-x-4">
            {/* Add logos here */}
            <a href="#" aria-label="Facebook">
            <Image
              src="/icons/facebookblue.png"
              alt="Facebook Icon"
              width={20}
              height={20}
              className="hover:opacity-75"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <Image
              src="/icons/twitterblue.png"
              alt="Twitter Icon"
              width={20}
              height={20}
              className="hover:opacity-75"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Image
              src="/icons/instagramblue.png"
              alt="Instagram Icon"
              width={20}
              height={20}
              className="hover:opacity-75"
            />
          </a>
          </div>
        </div>

        {/* Footer Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Takes 2/3 of the width */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            {/* Company Info */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Company Info</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Career</a></li>
                <li><a href="#" className="hover:text-gray-400">We are hiring</a></li>
                <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
              </ul>
            </div>

            {/* Features */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Business Marketing</a></li>
                <li><a href="#" className="hover:text-gray-400">User Analytic</a></li>
                <li><a href="#" className="hover:text-gray-400">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-400">Unlimited Support</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">IOS & Android</a></li>
                <li><a href="#" className="hover:text-gray-400">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-gray-400">Customers</a></li>
                <li><a href="#" className="hover:text-gray-400">API</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section (Newsletter): Takes 1/3 of the width */}
          <div className="md:col-span-1 space-y-4">
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-3/4 bg-customwhite text-white border border-gray-600 rounded"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Copy right line*/}
        <div className="flex justify-left space-x-6 mt-6 py-2">
          <p>Made with love by Abdul Majid Brohi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
