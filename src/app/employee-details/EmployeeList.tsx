"use client"
import React from 'react'
import EmployeeCard from './EmployeeCard'
import { EmployeeData } from '../data'

import SearchBar from '@/components/SearchBar'
import AddButton from '@/components/AddButton'

const EmployeeList = () => {

  const handleSearch = (hospitalName, location) => {
    console.log(`Searching for: ${hospitalName} in ${location}`);
    // Perform search logic here
  };
    
  return (
    <div className='max-w-[1400px] mx-auto'>
      
      <div className='flex justify-center py-8'>
        <SearchBar 
          onSearch={handleSearch}
          placeholderText="Search City"
        />
      </div>
      <AddButton buttonText={'Add Employee'}/>

    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {EmployeeData.map((item, index) => (
      <EmployeeCard     
        key={index}
        data={item}
    />
      
    ))}
  </div>
  </div>
  )
}

export default EmployeeList