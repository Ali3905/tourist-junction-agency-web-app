"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, placeholderText }) => {
  const [hospitalName, setHospitalName] = useState('');

  const handleSearch = () => {
    onSearch(hospitalName);
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-full shadow-md px-6 py-2 w-full max-w-2xl">
      {/* Search Icon */}
      <Search className="text-gray-400 text-xl" />

      {/* Hospital Name Input */}
      <input
        type="text"
        value={hospitalName}
        onChange={(e) => setHospitalName(e.target.value)}
        placeholder={placeholderText}  // Using the placeholderText prop here
        className="flex-1 px-4 text-gray-600 focus:outline-none placeholder-gray-400"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="ml-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;