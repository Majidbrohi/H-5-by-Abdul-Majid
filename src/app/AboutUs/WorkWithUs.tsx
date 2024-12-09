"use client";
import React from "react";
import Image from "next/image";

const WorkWithUs: React.FC = () => {
  return (
    <section className="bg-Cblue  font-montserrat text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16">
        {/* Left Text Section */}
 <div className="lg:w-1/2 mx-auto space-y-8 sm:ml-40  py-10 px-10 text-center sm:text-left ">
  <h3 className="text-sm font-bold text-white-500">WORK WITH US</h3>
  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
    Now Let’s grow Yours
  </h2>
  <p className="text-white-600 text-sm md:text-lg leading-relaxed">
    The gradual accumulation of information about atomic and
    <br />
     multi-scale behavior during the first quarter of the 20th century.
  </p>
  <button className="bg-Cblue text-white border-2 rounded-md border-white py-3 px-8 text-sm md:text-lg uppercase font-bold hover:bg-slate-800 transition duration-300">
    Button
  </button>
</div>

        {/* Right Image Section */}
        <div className="hidden lg:block lg:w-1/2 right-0 mt-12 lg:mt-0">
          <Image
            src="/shopicons2/WWU.png"
            alt="Work With Us"
            width={540}
            height={826}
            className=" object-cover mx-auto lg:mr-0"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
