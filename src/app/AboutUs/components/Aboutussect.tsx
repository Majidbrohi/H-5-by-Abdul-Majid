 "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Aboutussection: React.FC = () => {
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
              height={40}
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

          {/* Icons for Mobile Only */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Cart Icon */}
            <a href="#" aria-label="Cart">
              <Image
                src="/icons/cartforres.png"
                alt="Cart Icon"
                width={24}
                height={24}
                className="block"
              />
            </a>

            {/* Magnifier/Search Icon */}
            <a href="#" aria-label="Search">
              <Image
                src="/icons/megniresp.png"
                alt="Search Icon"
                width={24}
                height={24}
                className="block"
              />
            </a>

            {/* Mobile Menu Icon */}
            <Image
              src="/icons/resmenu.png"
              alt="Menu Icon"
              width={25}
              height={25}
              className="block"
            />
          </div>
        </div>

        {/* Vertical Links (Mobile Only) */}
        <div className="bg-white px-2 py-2 sm:hidden flex items-center justify-center min-h-[30vh]">
          <nav className="space-y-2 font-bold text-slate-600">
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
              href="/Shop"
              className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
            >
              Pricing
            </Link>
            <Link
              href="/Contact"
              className="block text-sm font-medium hover:bg-gray-200 p-2 rounded"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between  px-4 md:px-8 lg:px-16 pt-8 md:pt-16">
        {/* Content */}
        <div className="lg:w-1/2 ml-20 text-left space-y-4 md:space-y-6 order-2 lg:order-1">
          <p className="font-bold text-base md:text-lg">SUMMER 2024</p>
          <h1 className="text-5xl  mt-4 md:text-5xl font-bold text-customDarkBlue">
            ABOUT US
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-lg leading-relaxed">
            We Know How large Objects act.
            <br />
            but things on a small scale.
          </p>
          <button className="bg-blue-400 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-500 text-sm md:text-base">
            Get Quote Now
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 order-1 lg:order-2">
          <Image
            src="/aboutus/heroimg.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg object-cover mx-auto lg:mx-0"
          />
        </div>
      </section>
    </div>
  );
};

export default Aboutussection;
