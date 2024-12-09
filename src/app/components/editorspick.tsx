import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, label, className }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-4 left-4 bg-white text-black font-bold py-2.5 px-5 shadow">
        {label}
      </button>
    </div>
  );
};

const EditorsPick: React.FC = () => {
  return (
    <section className="editor-pick-section px-8 py-12 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">EDITOR S PICK</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6 max-w-screen-lg mx-auto">
        {/* Men */}
        <div className="w-full lg:w-[33%] h-[500px]">
          <ImageCard
            src="/icons2/mens.png"
            alt="Men"
            label="MEN"
          />
        </div>

        {/* Women */}
        <div className="w-full lg:w-[33%] h-[500px]">
          <ImageCard
            src="/icons2/womens.png"
            alt="Women"
            label="WOMEN"
          />
        </div>

        {/* Accessories */}
        <div className="w-full lg:w-[33%] flex flex-col gap-6">
          <div className="h-[240px]">
            <ImageCard
              src="/icons2/acces.png"
              alt="Accessories"
              label="ACCESSORIES"
            />
          </div>
          {/* Kids */}
          <div className="h-[240px]">
            <ImageCard
              src="/icons2/kids.png"
              alt="Kids"
              label="KIDS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
