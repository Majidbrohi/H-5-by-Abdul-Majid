import Image from "next/image";

const IconList = () => {
  return (
    <div className="container bg-slate-50 mx-auto px-4 py-6">
      {/* Upper section: Showing results, views toggle, and filter */}
      <div className="flex items-center justify-between py-4 border-b">
        <span className="text-sm font-bold ml-10 text-gray-600">Showing all 12 results</span>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-bold text-gray-600">Views:</span>
          <div className="flex items-center space-x-2">
            {/* Grid view button */}
            <button className="px-4 py-2 bg-white-600 text-white rounded-lg flex items-center justify-center">
              <Image src="/shopicons2/grid.png" alt="Grid Icon" width={40} height={50} />
            </button>
            {/* List view button */}
            <button className="px-4 py-2 bg-white text-black rounded-lg flex items-center justify-center">
              <Image src="/shopicons2/menubar.png" alt="List Icon" width={40} height={50} />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4 mx-10 mt-4 flex-wrap">
          {/* Popularity Select Dropdown */}
          <select className="px-4 py-3 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          {/* Filter Button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 sm:mt-0">
            Filter
          </button>
        </div>
      </div>

      {/* Icons: Responsive layout for mobile and desktop */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14">
        {/* First Icon */}
        <div className="flex justify-center items-center">
          <Image src="/shopicons2/fa1.png" alt="Hooli" width={105} height={35} />
        </div>
        {/* Second Icon */}
        <div className="flex justify-center items-center">
          <Image src="/shopicons2/fa2.png" alt="Lyft" width={105} height={35} />
        </div>
        {/* Third Icon */}
        <div className="flex justify-center items-center">
          <Image src="/shopicons2/fa3.png" alt="Stripe" width={105} height={35} />
        </div>
        {/* Fourth Icon */}
        <div className="flex justify-center items-center">
          <Image src="/shopicons2/fa4.png" alt="AWS" width={105} height={35} />
        </div>
        {/* Fifth Icon */}
        <div className="flex justify-center items-center">
          <Image src="/shopicons2/fa5.png" alt="AWS" width={105} height={35} />
        </div>
        {/* Sixth Icon */}
        <div className="flex justify-center items-center">
          <Image src="/shopicons2/fa6.png" alt="AWS" width={105} height={35} />
        </div>
      </div>
    </div>
  );
};

export default IconList;
