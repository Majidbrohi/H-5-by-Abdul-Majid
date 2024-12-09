import React from 'react';

const FeaturedPosts: React.FC = () => {
  return (
    <section className="featured-posts bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-wide mb-2">
            Practice Advice
          </p>
          <h2 className="text-4xl font-bold mb-4">Featured Posts</h2>
          <p className="text-gray-500">
            Problems trying to resolve the conflict between
            <br /> the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <picture>
                {/* Mobile Image */}
                <source
                  media="(max-width: 768px)" // Breakpoint for mobile screens
                  srcSet="/icons5/mobileimg1.png" // Replace with your mobile-specific image
                />
                {/* Default Image (Desktop) */}
                <img
                  src="/icons5/img3_1.png"
                  alt="Featured Post 1"
                  className="w-full h-52 object-cover"
                />
              </picture>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-3 py-1 rounded-full">
                New
              </span>
            </div>
            <div className="p-6">
              <p className="text-blue-500 text-xs mb-1">Google Trending New</p>
              <h3 className="text-xl font-bold mb-2">Loudest à la Madison #1 (L'integral)</h3>
              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <div className="flex items-center mr-4">
                  <img
                    src="/icons5/clock.png" // Add your date icon path
                    alt="Date"
                    className="w-4 h-4 mr-1"
                  />
                  22 April 2021
                </div>
                <div className="flex items-center">
                  <img
                    src="/icons5/commentsicon.png" // Add your comments icon path
                    alt="Comments"
                    className="w-4 h-4 mr-1"
                  />
                  10 comments
                </div>
              </div>
              <a
                href="#"
                className="block mt-4 text-blue-500 font-semibold hover:underline"
              >
                Learn More
                <img
                  src="/icons5/arrowicon.png" // Add your arrow icon path
                  alt="Learn More"
                  className="inline w-4 h-4 mr-1"
                />
              </a>
            </div>
          </div>

          {/* Repeat similar structure for Card 2 and Card 3 */}
          {/* Card 2 */}
          <div className="card bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/icons5/mobileimg2.png"
                />
                <img
                  src="/icons5/img3_2.png"
                  alt="Featured Post 2"
                  className="w-full h-52 object-cover"
                />
              </picture>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-3 py-1 rounded-full">
                New
              </span>
            </div>
            <div className="p-6">
              <p className="text-blue-500 text-xs mb-1">Google Trending New</p>
              <h3 className="text-xl font-bold mb-2">Loudest à la Madison #1 (L'integral)</h3>
              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <div className="flex items-center mr-4">
                  <img
                    src="/icons5/clock.png"
                    alt="Date"
                    className="w-4 h-4 mr-1"
                  />
                  22 April 2021
                </div>
                <div className="flex items-center">
                  <img
                    src="/icons5/commentsicon.png"
                    alt="Comments"
                    className="w-4 h-4 mr-1"
                  />
                  10 comments
                </div>
              </div>
              <a
                href="#"
                className="block mt-4 text-blue-500 font-semibold hover:underline"
              >
                Learn More
                <img
                  src="/icons5/arrowicon.png"
                  alt="Learn More"
                  className="inline w-4 h-4 mr-1"
                />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/icons5/mobileimg3.png"
                />
                <img
                  src="/icons5/img3_3.png"
                  alt="Featured Post 3"
                  className="w-full h-52 object-cover"
                />
              </picture>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-3 py-1 rounded-full">
                New
              </span>
            </div>
            <div className="p-6">
              <p className="text-blue-500 text-xs mb-1">Google Trending New</p>
              <h3 className="text-xl font-bold mb-2">Loudest à la Madison #1 (L'integral)</h3>
              <p className="text-gray-600 mb-4">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <div className="flex items-center mr-4">
                  <img
                    src="/icons5/clock.png"
                    alt="Date"
                    className="w-4 h-4 mr-1"
                  />
                  22 April 2021
                </div>
                <div className="flex items-center">
                  <img
                    src="/icons5/commentsicon.png"
                    alt="Comments"
                    className="w-4 h-4 mr-1"
                  />
                  10 comments
                </div>
              </div>
              <a
                href="#"
                className="block mt-4 text-blue-500 font-semibold hover:underline"
              >
                Learn More
                <img
                  src="/icons5/arrowicon.png"
                  alt="Learn More"
                  className="inline w-4 h-4 mr-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
