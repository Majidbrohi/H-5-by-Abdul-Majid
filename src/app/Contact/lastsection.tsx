import React from "react";

const LetsTalkCTA: React.FC = () => {
  return (
    <div className="font-montserrat">
      <section className="py-16 bg-white-500">
        <div className="container mx-auto px-8 lg:px-16 text-center text-gray-800">
          {/* Section Header */}
          <p className="text-base  font-bold mb-8">
            WE CAN NOT WAIT TO MEET YOU
          </p>
          <h2 className="text-5xl font-bold mb-6">Lets Talk</h2>
           

          {/* CTA Button */}
          <a
            href="#contact-form"
            className="inline-block bg-blue-500 text-white py-3 px-8 rounded-sm text-lg font-medium shadow-md"
          >
         Try it free now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LetsTalkCTA;
