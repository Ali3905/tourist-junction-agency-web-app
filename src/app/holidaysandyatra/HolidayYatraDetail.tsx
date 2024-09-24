"use client"
import React from 'react'
import HolidayYatraCard from './HolidayYatraCard'
import { HolidayYatraData } from '../data'
import SearchBar from '@/components/SearchBar'
import AddButton from '@/components/AddButton'

const HolidayYatraDetail = () => {

  const handleSearch = (hospitalName, location) => {
    console.log(`Searching for: ${hospitalName} in ${location}`);
    // Perform search logic here
  };
    
  return (
    <div className='max-w-[1400px] mx-auto'>
       <div className='flex justify-center py-8'>
        <SearchBar 
          onSearch={handleSearch}
          placeholderText="Search Tour Name"
        />
      </div>
     <div>
       <AddButton buttonText={'Add Holiday & Yatra'}/>
     <div className="flex justify-center space-x-4 flex-wrap py-8 ">
        {HolidayYatraData.map((item, index) => (
          <HolidayYatraCard     
            key={index}
            data={item}
        />    
        ))}
      </div>
     </div>
  </div>
  )
}

export default HolidayYatraDetail