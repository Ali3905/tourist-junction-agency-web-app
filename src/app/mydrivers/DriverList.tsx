"use client"
import React from 'react'
import DriverCard from '@/components/DriverCard'
import { DriverData } from '../data'
import SearchBar from '@/components/SearchBar'
import UpdateButton from '@/components/UpdateButton'
import DeleteButton from '@/components/DeleteButton'
import AddButton from '@/components/AddButton'

const DriverList = ({onDelete, onUpdate}) => {
    
  return (
    <div className='max-w-[1400px] mx-auto'>
          <div className='flex justify-center py-8'>
            <SearchBar   
              placeholderText="Search City"
            />
        </div>
        <AddButton buttonText={'Add Driver'}/>
        <div className="flex justify-center space-x-4 flex-wrap py-8">
          {DriverData.map((item, index) => (
            <div key={index} className="relative">
              {/* Card Content */}
              <DriverCard data={item} />

              {/* Update and Delete Buttons */}
              <div className="absolute top-2 right-2 space-x-2">
                <UpdateButton onUpdate={onUpdate} />
                <DeleteButton onDelete={onDelete} />
              </div>
            </div>
          ))}
        </div>
  </div>
  )
}

export default DriverList