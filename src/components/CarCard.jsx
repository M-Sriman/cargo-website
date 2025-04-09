import React, { useRef } from "react";
import { Heart, HeartOff, Eye, Plus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const CarCard = ({ car, onViewDetails, onToggleWishlist, isWishlisted }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  const handleBuyNow = () => {
    navigate(`/buy/${car.id}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-xl border border-white/20 dark:border-gray-700 rounded-2xl overflow-hidden transition hover:scale-[1.02] hover:shadow-2xl duration-300 min-h-[440px] flex flex-col"
    >
      {/* Image */}
      <img
        src={car.image}
        alt={car.model}
        className="h-44 w-full object-cover rounded-t-2xl"
      />

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {car.brand} {car.model}
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>Fuel:</strong> {car.fuel}</li>
            <li><strong>Seats:</strong> {car.seats}</li>
            <li><strong>Price:</strong> {car.price}</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <button
              onClick={() => navigate(`/car/${car.id}`)}
              className="flex-1 flex items-center justify-center gap-2 text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
            >
              <Eye size={16} /> View
            </button>

            <button
              onClick={() => onToggleWishlist(car)}
              className={`flex-1 flex items-center justify-center gap-2 text-sm px-3 py-1.5 rounded-lg border transition ${
                isWishlisted
                  ? "border-red-400 text-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                  : "border-green-500 text-green-600 hover:bg-green-100 dark:hover:bg-green-900"
              }`}
            >
              {isWishlisted ? (
                <>
                  <HeartOff size={16} /> Remove
                </>
              ) : (
                <>
                  <Heart size={16} /> Wishlist
                </>
              )}
            </button>
          </div>

          {!isWishlisted && (
            <button
              onClick={() => onToggleWishlist(car)}
              className="w-full flex items-center justify-center gap-2 text-sm bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition font-medium"
            >
              <Plus size={16} /> Add to Wishlist
            </button>
          )}

          <button
            onClick={handleBuyNow}
            className="w-full flex items-center justify-center gap-2 text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-medium"
          >
            <ShoppingCart size={16} /> Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
