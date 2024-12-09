 "use client";
import React from "react";
import Image from "next/image";

const MeetOurTeam: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16 font-montserrat">
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-5xl font-extrabold text-customDarkBlue">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-sm md:text-lg">
          Problems trying to resolve the conflict between 
          <br />
          the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Developer Images */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dev 1 */}
        <div className="flex justify-center">
          <Image
            src="/shopicons2/t1.png"
            alt="Developer 1"
            width={300}
            height={250}
            className="object-cover"
          />
        </div>
        {/* Dev 2 */}
        <div className="flex justify-center">
          <Image
            src="/shopicons2/t2.png"
            alt="Developer 2"
            width={300}
            height={250}
            className="object-cover"
          />
        </div>
        {/* Dev 3 */}
        <div className="flex justify-center">
          <Image
            src="/shopicons2/t3.png"
            alt="Developer 3"
            width={300}
            height={250}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
