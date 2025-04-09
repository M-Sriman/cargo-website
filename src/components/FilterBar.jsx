import React from "react";
import { Search, Fuel, Car, ArrowDownUp } from "lucide-react";

const FilterBar = ({ filters, onChange }) => {
  return (
    <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl px-6 py-8 max-w-7xl mx-auto transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        
        {/* Search Field */}
        <div className="relative group">
          <Search className="absolute top-3.5 left-4 text-black/70 group-focus-within:text-[#00ffd5]" size={20} />
          <input
            type="text"
            placeholder="Search by brand or model"
            value={filters.query}
            onChange={(e) => onChange("query", e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/10 text-black placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#8c52ff]/70 transition-all duration-200"
          />
        </div>

        {/* Fuel Filter */}
        <div className="relative group">
          <Fuel className="absolute top-3.5 left-4 text-black/70 group-focus-within:text-[#00ffd5]" size={20} />
          <select
            value={filters.fuel}
            onChange={(e) => onChange("fuel", e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/10 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#8c52ff]/70 transition-all duration-200"
          >
            <option value="">Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* Seat Filter */}
        <div className="relative group">
          <Car className="absolute top-3.5 left-4 text-black/70 group-focus-within:text-[#00ffd5]" size={20} />
          <select
            value={filters.seats}
            onChange={(e) => onChange("seats", e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/10 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#00bf63]/70 transition-all duration-200"
          >
            <option value="">Seats</option>
            <option value="2">2 Seater</option>
            <option value="4">4 Seater</option>
            <option value="5">5 Seater</option>
            <option value="7">7 Seater</option>
          </select>
        </div>

        {/* Sort Filter */}
        <div className="relative group">
          <ArrowDownUp className="absolute top-3.5 left-4 text-black/70 group-focus-within:text-[#00ffd5]" size={20} />
          <select
            value={filters.sort}
            onChange={(e) => onChange("sort", e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/10 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#00bf63]/70 transition-all duration-200"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
