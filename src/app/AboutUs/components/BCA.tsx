"use client";
import React from "react";
import Image from "next/image";

const BigCompanies: React.FC = () => {
  return (
    <section className="bg-lightBlue py-16 px-4 md:px-16 text-center font-montserrat">
      <h2 className="text-customDarkBlue mb-6 font-bold text-2xl md:text-4xl mb-4">
        Big Companies Are Here
      </h2>
      <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-16">
        Problems trying to resolve the conflict between 
        <br />
        the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-wrap justify-center gap-28">
        {/* Logos */}
        <div className="w-20 md:w-24">
          <Image
            src="/shopicons2/fa1.png"
            alt="Hooli Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <div className="w-20 md:w-24">
          <Image
            src="/shopicons2/fa2.png"
            alt="Lyft Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <div className="w-20 md:w-24">
          <Image
            src="/shopicons2/fa3.png"
            alt="Stripe Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <div className="w-20 md:w-24">
          <Image
            src="/shopicons2/fa4.png"
            alt="AWS Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <div className="w-20 md:w-24">
          <Image
            src="/shopicons2/fa5.png"
            alt="Reddit Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BigCompanies;
