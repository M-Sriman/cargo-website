import React from "react";
import { useParams } from "react-router-dom";

const CarDetailsPage = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((c) => c.id.toString() === id);

  if (!car) {
    return <div className="p-4 text-center text-red-500">Car not found 😢</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
      />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {car.brand} {car.model}
      </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-lg">
          <li><strong>Fuel Type:</strong> {car.fuel}</li>
          <li><strong>Seating Capacity:</strong> {car.seats}</li>
          <li><strong>Price:</strong> {car.price.toLocaleString('en-IN')}</li>
          <li><strong>Year:</strong> {car.year || "Not specified"}</li>
          <li><strong>Mileage:</strong> {car.mileage || "Not available"}</li>
          <li><strong>Description:</strong> {car.description || "No additional info provided."}</li>
          {car.link && (
            <li>
              <strong>Know More:</strong>{" "}
              <a
                href={car.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Official Site
              </a>
            </li>
          )}
        </ul>

    </div>
  );
};

export default CarDetailsPage;
