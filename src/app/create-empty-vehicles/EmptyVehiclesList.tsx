"use client"
import React from 'react'
import { EmptyVehicleData } from '../data'
import EmptyVehicleCard from './EmptyVehicleCard'
import SearchBar from '@/components/SearchBar'
import AddButton from '@/components/AddButton'

const EmptyVehiclesList = () => {
    
  return (
    <div className='max-w-[1400px] mx-auto'>
        <div className='flex justify-center py-8'>
        <SearchBar
          // onSearch={handleSearch}
          placeholderText="Search Tour Name"
        />
      </div>
      <AddButton buttonText={'Add Empty Vehicle'}/>
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {EmptyVehicleData.map((item, index) => (
      <EmptyVehicleCard     
        key={index}
        data={item}
    />
      
    ))}
  </div>
  </div>
  )
}

export default EmptyVehiclesList