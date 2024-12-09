 "use client";
import React from "react";

const VisitOurOffice: React.FC = () => {
  return (
    <div className="font-montserrat">
      <section className="py-20 bg-gradient-to-b from-white to-white">
        <div className="container mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-base font-extrabold text-gray-800 tracking-tight">
              Visit Our Office
            </p>
            <h2 className="text-gray-800  font-bold mt-4 text-5xl">
              We Help Small Businesses <br />
              with big ideas
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Card 1 */}
            <div className="flex flex-col items-center py-4 bg-white shadow-md  hover:shadow-lg transition-all duration-300">
              <img
                src="/contactus/phone.png"
                alt="Location Icon"
                className="w-20 h-28 mb-6  py-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Main Office</h3>
              <p className="text-gray-600 mt-4 text-center">
                brohi.majid@example.com <br />
                gorgea.young@example.com
              </p>
              <button className="mt-6 bg-transparent text-blue-500 border border-blue-500 px-6 py-3 rounded-full text-sm font-medium shadow-md transition hover:bg-blue-500 hover:text-white">
                Submit Request
                </button>

            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-white p-8 bg-customDarkBlue shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="/contactus/location.png"
                alt="Branch Icon"
                className="w-20 h-28 mb-6 py-4"
              />
              <h3 className="text-2xl font-semibold text-white">Branch Office</h3>
              <p className="text-white mt-4 text-center">
                brohi.majid@example.com <br />
                gorgea.young@example.com
              </p>
              <button className="mt-6 bg-transparent text-blue-500 border border-blue-500 px-6 py-3 rounded-full text-sm font-medium shadow-md transition hover:bg-blue-500 hover:text-white">
                  Submit Request
                       </button>

            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-8 bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src="/contactus/mail.png"
                alt="Support Icon"
                className="w-20 h-28 mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Support Center</h3>
              <p className="text-gray-600 mt-4 text-center">
                brohi.majid@example.com <br />
                gorgea.young@example.com
              </p>
              <button className="mt-6 bg-transparent text-blue-500 border border-blue-500 px-6 py-3 rounded-full text-sm font-medium shadow-md transition hover:bg-blue-500 hover:text-white">
  Submit Request
</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitOurOffice;
