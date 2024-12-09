import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center py-8 gap-0 px-4 rounded-lg items-center mt-4">
      <button className="px-4 py-2  my-4 border border-gray-300 text-sm text-gray-400 cursor-not-allowed bg-gray-200" disabled>
        First
      </button>

      <button className="px-4 py-2 border border-gray-300    text-sm text-blue-500 cursor-not-allowed bg-gray-200" disabled>
        Prev
      </button>

      <button className="px-4 py-2 border border-gray-300    text-sm text-blue-500 font-semibold bg-blue-500 ">
        1
      </button>

      <button className="px-4 py-2 border border-gray-300    text-sm text-blue-500 hover:bg-blue-100">
        2
      </button>

      <button className="px-4 py-2 border border-gray-300    text-sm text-blue-500 hover:bg-blue-100">
        3
      </button>

      <button className="px-4 py-2 border border-gray-300    text-sm text-blue-500 hover:bg-blue-100">
        Next
      </button>
    </div>
  );
};

export default Pagination;
