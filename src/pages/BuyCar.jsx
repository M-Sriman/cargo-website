import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars as carList } from "../api/mockData"; 
import { ArrowLeft } from "lucide-react";

const BuyCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCar = carList.find((c) => c.id === parseInt(id));
    if (selectedCar) {
      setCar(selectedCar);
    }
  }, [id]);

  if (!car) {
    return (
      <div className="text-center text-white text-xl py-20">
        Loading car details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-3xl font-bold mb-2">
          Buy: {car.brand} {car.model}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-64 object-cover rounded-xl border border-white/10 shadow-md"
          />

          <div className="text-lg space-y-3">
            <p>
              <strong>Brand:</strong> {car.brand}
            </p>
            <p>
              <strong>Model:</strong> {car.model}
            </p>
            <p>
              <strong>Fuel Type:</strong> {car.fuel}
            </p>
            <p>
              <strong>Seats:</strong> {car.seats}
            </p>
            <p>
              <strong>Price:</strong>{" "}
              <span className="text-emerald-400 font-semibold">${car.price}</span>
            </p>

            <button
              onClick={() => alert("Thank you for showing interest!")}
              className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCar;
