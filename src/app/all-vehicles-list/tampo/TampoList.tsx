"use client";
import React from 'react';
import VehicleCard from '../VehicleCard';
import { TampoData } from '../../data'; // Import the dummy data
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/AddButton';

const TampoList = () => {

  const handleSearch = (hospitalName, location) => {
    console.log(`Searching for: ${hospitalName} in ${location}`);
    // Perform search logic here
  };

  return (
    <div className='max-w-[1400px] mx-auto'>
      {/* Centered container for the search bar */}
      <div className='flex justify-center py-8'>
        <SearchBar 
          onSearch={handleSearch}
          placeholderText="Enter Vehicle No"
        />
      </div>
         <AddButton buttonText={'Add Tampo'}/>
      {/* Container for the bus cards */}
      <div className="flex justify-center space-x-4 flex-wrap py-8">
        {TampoData.map((item, index) => (
          <VehicleCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TampoList;
