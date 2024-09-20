"use client"
import React from 'react'
import DriverCard from '@/components/DriverCard'
import { DriverData } from '../data'
import AddButton from '@/components/AddButton'
import SearchBar from '@/components/SearchBar'

const DriverList = () => {
    
  return (
    <div className='max-w-[1400px] mx-auto'>
         <div className='flex justify-center py-8'>
        <SearchBar 
   
          placeholderText="Search Location"
        />
      </div>
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {DriverData.map((item, index) => (
      <DriverCard     
        key={index}
        data={item}
    />
    ))}
  </div>
  </div>
  )
}

export default DriverList