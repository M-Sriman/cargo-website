import React, { useEffect, useState } from "react";
import { cars as mockCars } from "../api/mockData";
import CarCard from "../components/CarCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const CarListPage = ({ wishlist, setWishlist }) => {
  const [filters, setFilters] = useState({ query: "", fuel: "", seats: "", sort: "" });
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    setCars(mockCars);
  }, []);

  useEffect(() => {
    let temp = [...cars];

    if (filters.query) {
      temp = temp.filter((c) =>
        `${c.brand} ${c.model}`.toLowerCase().includes(filters.query.toLowerCase())
      );
    }

    if (filters.fuel) temp = temp.filter((c) => c.fuel === filters.fuel);
    if (filters.seats) temp = temp.filter((c) => c.seats.toString() === filters.seats);

    if (filters.sort === "asc") temp.sort((a, b) => a.price - b.price);
    if (filters.sort === "desc") temp.sort((a, b) => b.price - a.price);

    setFilteredCars(temp);
    setCurrentPage(1);
  }, [filters, cars]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleToggleWishlist = (car) => {
    const exists = wishlist.some((item) => item.id === car.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  const handleViewDetails = (car) => {
    navigate(`/car/${car.id}`);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-white dark:text-white mb-8 drop-shadow-md">
        Drive the Dream. Discover Your Car.
      </h1>

      <div className="mb-8 rounded-xl shadow-lg p-4 sm:p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700">
        <FilterBar filters={filters} onChange={handleFilterChange} />
      </div>

      {currentCars.length === 0 ? (
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mt-12">
          No cars match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onViewDetails={handleViewDetails}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={wishlist.some((item) => item.id === car.id)}
            />
          ))}
        </div>
      )}

      {filteredCars.length > carsPerPage && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default CarListPage;
