"use client";
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/AddButton';
import ServiceList from './ServiceList';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';

const ServiceContainer = ({ data }: { data: VehicleService[] }) => {
  const [filteredData, setFilteredData] = useState<VehicleService[]>(data)
  const router = useRouter()
  const handleSearch = (query: string) => {

    // Normalize the query to lowercase for case-insensitive comparison
    const lowerCaseQuery = query.toLowerCase();

    // Filter the data
    const filtered = data.filter((service: VehicleService) => {
      // Normalize the fields to lowercase for comparison
      const garageNameMatch = service.garageName?.toLowerCase().includes(lowerCaseQuery);
      const garageNumberMatch = service.garageNumber?.toLowerCase().includes(lowerCaseQuery);
      const workDescriptionMatch = service.workDescription?.toLowerCase().includes(lowerCaseQuery);

      // Return true if any of the fields match the query
      return garageNameMatch || garageNumberMatch || workDescriptionMatch;
    });

    // Update the filtered data
    setFilteredData(filtered);
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
      <AddButton buttonText={'Add vehicle servicing'} onClick={() => router.push("/vehicle-servicing-history/create")} />
      {/* Container for the bus cards */}
      <Provider store={store}>
        <ServiceList data={filteredData} />
      </Provider>
    </div>
  );
};

export default ServiceContainer;
