"use client"
import React from 'react';
import { DailyRouteInspectionData } from '../../data';
import DailyRouteCard from './DailyRouteCard';
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/AddButton';

const DailyRouteList = () => {
  // Ensure DailyRouteInspectionData is an array or use an empty array if undefined.
  const data = DailyRouteInspectionData || [];

  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex justify-center py-8'>
        <SearchBar placeholderText="Search City" />
      </div>
      {/* <div className="flex justify-end">
        <AddButton buttonText={'Add Cleaner'} />
      </div> */}
      <div className="flex justify-center space-x-4 flex-wrap py-8">
        {data.length > 0 ? (
          data.map((item, index) => (
            <DailyRouteCard key={index} data={item} />
          ))
        ) : (
          <p>No routes available</p>
        )}
      </div>
    </div>
  );
}

export default DailyRouteList;
