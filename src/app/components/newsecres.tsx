import React from 'react';

const NewSectionReverse: React.FC = () => {
  return (
    <section className="new-section-reverse relative bg-customwhite text-customDarkBlue px-8 py-12">
      {/* Container for Content */}
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image */}
        <div className="left-image flex justify-center">
          {/* Desktop Image */}
          <img
            src="/icons4/img2.png" // Replace with your desktop image path
            alt="Featured Product"
            className="hidden md:block h-auto w-3/4 object-cover"
          />
          {/* Mobile Image */}
          <img
            src="/icons4/img2-res.png" // Replace with your mobile image path
            alt="Featured Product (Mobile)"
            className="block md:hidden h-auto w-3/4 object-cover"
          />
        </div>

        {/* Right Side: Text and Buttons */}
        <div className="right-content flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <p className="text-sm text-cgray font-bold mb-2">SUMMER 2024</p>
          <h2 className="text-3xl font-bold mt-6 mb-4">
            <span className="block mb-2">Part of the Neural</span>
            <span className="block">Universe</span>
          </h2>
          <p className="text-gray-500 mt-4 mb-6">
            We know how large things will act. We know
            <br />
            how objects will behave in different situations.
          </p>
          {/* Buttons with Vertical Alignment for Mobile */}
          <div
  className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-6"
>
  <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-gray-700">
    Add to Cart
  </button>
  <button className="bg-transparent border border-gray-500 text-gray-500 font-semibold py-2 px-6 rounded hover:bg-green-500 hover:text-white">
    View Details
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default NewSectionReverse;
