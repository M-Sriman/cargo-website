import React from "react";

const Wishlist = ({ items, onRemove }) => {
  return (
    <div className="p-6 rounded-2xl shadow-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide">
        💖 Your Wishlist
      </h2>

      {items.length === 0 ? (
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Your wishlist is empty. Start exploring some cars!
        </p>
      ) : (
        <ul className="divide-y divide-gray-300 dark:divide-gray-700">
          {items.map((car) => (
            <li
              key={car.id}
              className="flex justify-between items-center py-3 px-2 rounded-lg transition hover:bg-white/40 dark:hover:bg-gray-700/40"
            >
              <div className="text-sm font-medium text-gray-800 dark:text-white">
                {car.brand} {car.model}
              </div>
              <button
                onClick={() => onRemove(car)}
                className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
