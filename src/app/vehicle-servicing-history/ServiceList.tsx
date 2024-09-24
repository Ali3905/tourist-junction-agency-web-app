"use client";
import React from 'react';
import { ServiceData } from '../data'; // Import the dummy data
import SearchBar from '@/components/SearchBar';
import ServiceHistoryCard from './ServiceHistoryCard';
import AddButton from '@/components/AddButton';

const ServiceList = () => {

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
      <AddButton buttonText={'Add vehicle servicing'}/>
      {/* Container for the bus cards */}
      <div className="flex justify-center space-x-4 flex-wrap py-8">
        {ServiceData.map((item, index) => (
          <ServiceHistoryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
