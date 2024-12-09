 "use client";
import React from "react";
import Image from "next/image";

const AboutUsStats: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16 font-montserrat">
      {/* Upper Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16">
        {/* Text Content */}
        <div className="lg:w-1/2 ml-20 text-left space-y-4">
  <p className="text-red-600 text-lg md:text-sm leading-relaxed">
    Problems Trying
  </p>
  <div className="flex justify-between items-start">
    <h6 className="text-customDarkBlue font-bold text-lg md:text-2xl">
      Met minim mollie non desert 
      <br />
      Alamo est sit cliguey dolor do 
      <br />
      met sent.
    </h6>
      </div>
</div>

        {/* Empty Space for Large Screens */}
        <div className="lg:w-1/2 hidden lg:block ">
        <p className="text-gray-600 text-lg font-bold md:text-sm ml-4">Problems trying to resolve the conflict between the two realms of 
          <br />
          Classical Physica : Newotonian machanics </p>
 </div>
      </div>

      {/* Second Section (Numbers and Descriptions) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {/* Stats Blocks */}
        <div className="space-y-4">
          <p className="text-customDarkBlue font-extrabold text-4xl md:text-[80px] lg:text-[80px] leading-tight">
            15k
          </p>
          <p className="text-gray-600 text-lg font-semibold">
            Happy Customers
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-customDarkBlue font-extrabold text-4xl md:text-[80px] lg:text-[80px] leading-tight">
            150k
          </p>
          <p className="text-gray-600 text-lg font-semibold">
            Monthly Visitors
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-customDarkBlue font-extrabold text-4xl md:text-[80px] lg:text-[80px] leading-tight">
            15
          </p>
          <p className="text-gray-600 text-lg font-semibold">
            Countries Worldwide
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-customDarkBlue font-extrabold text-4xl md:text-[80px] lg:text-[80px] leading-tight">
            100+
          </p>
          <p className="text-gray-600 text-lg font-semibold">
            Top Partners
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-16 mt-32">
        <Image
          src="/shopicons2/VCard.png"
          alt="Descriptive Image"
          width={1100}
          height={900}
          className=" object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUsStats;
