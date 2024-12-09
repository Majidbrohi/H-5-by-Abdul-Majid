import React from 'react';
import Image from 'next/image';

const NewSection: React.FC = () => {
  return (
    <section
      className="new-section relative bg-[#23856D] text-white px-8 pt-16"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {/* Container for Content */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* Left Side: Text and Button */}
        <div className="left-content flex flex-col justify-center order-1 md:order-none">
          <p className="text-sm text-gray-200 mb-2">SUMMER 2024</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            <span className="block mb-2">Vita Classic</span>
            <span className="block">Product</span>
          </h2>
          <p className="text-gray-100 mt-4 mb-6">
            We know how large things will act. We know
            <br />
            how objects will act. We know.
          </p>
          {/* Button with Amount */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <span className="text-2xl">$49.99</span>
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-gray-100 hover:text-green-700 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="right-image flex justify-center order-2 md:order-none mt-8 md:mt-0">
          <Image
            src="/icons4/img1.png" // Replace with your image path
            alt="Featured Product"
            className="w-3/4 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewSection;
