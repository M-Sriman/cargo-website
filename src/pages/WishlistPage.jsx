import React from "react";
import { useNavigate } from "react-router-dom";

const WishlistPage = ({ wishlist, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">❤️ Your Wishlist</h2>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 dark:text-blue-400 hover:underline text-sm"
      >
        ← Back to Cars
      </button>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((car) => (
            <li
              key={car.id}
              className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow"
            >
              <div>
                <p className="text-lg font-semibold dark:text-white">
                  {car.brand} {car.model}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fuel: {car.fuel} | Seats: {car.seats} | Price: ${car.price}
                </p>
              </div>
              <button
                onClick={() => onRemove(car)}
                className="text-red-500 text-sm hover:underline"
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

export default WishlistPage;
