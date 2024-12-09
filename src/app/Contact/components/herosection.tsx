 "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutussectionCon: React.FC = () => {
  return (
    <div className="font-montserrat">
      {/* Header */}
      <header className="bg-white px-4 md:px-8 py-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/aboutus/Bandage.png"
              alt="Logo"
              width={120}
              height= {40}
              className="ml-2 md:ml-4"
            />
          </div>

          {/* Navigation Links (Desktop Only) */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 text-customDarkBlue text-sm lg:text-lg font-bold">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/Shop" className="hover:text-blue-400">
              Product
            </Link>
            <Link href="/Shop" className="hover:text-blue-400">
              Pricing
            </Link>
            <Link href="/Contact" className="hover:text-blue-400">
              Contact
            </Link>
          </nav>

          {/* Login Link and "Become a Member" Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-blue-400 hover:text-blue-600">
              Login
            </Link>
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              Become a Member
            </button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="flex h-dvh flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12">
        {/* Left Side Content */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-800 font-bold text-sm">CONTACT US</p>
          <h1 className="text-5xl font-extrabold text-gray-800">
            Get in touch 
            <br />
            today!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
          <p className="font-bold text-gray-800">
            Phone: +451 215 215 <br />
            Fax: +451 215 215
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Image
              src="/contactus/facebook.png"
              alt="Facebook"
              width= {20}
              height= {20}
              className="hover:opacity-80 transition duration-300"
            />
            <Image
              src="/contactus/twitter.png"
              alt="Twitter"
              width= {20}
              height= {20}
              className="hover:opacity-90 transition duration-300"
            />
            <Image
              src="/contactus/linkedin.png"
              alt="LinkedIn"
              width= {20}
              height= {20}
              className="hover:opacity-80 transition duration-300"
            />
            <Image
              src="/contactus/instagram.png"
              alt="Instagram"
              width= {20}
              height= {20}
              className="hover:opacity-80 transition duration-300"
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/contactus/bg.png"
            alt="Family Shopping"
            width= {1000}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutussectionCon;
