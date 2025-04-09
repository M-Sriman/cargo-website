import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex gap-4 p-4 rounded-xl shadow-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700">
        {/* Prev Button */}
        <button
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-medium transition ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50 border-gray-300 dark:border-gray-700"
              : "hover:bg-blue-600 hover:text-white border-blue-500 text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        {/* Page Info */}
        <span className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-semibold">
          Page <span className="font-bold">{currentPage}</span> of {totalPages}
        </span>

        {/* Next Button */}
        <button
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-medium transition ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50 border-gray-300 dark:border-gray-700"
              : "hover:bg-blue-600 hover:text-white border-blue-500 text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
