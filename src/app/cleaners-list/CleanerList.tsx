"use client"
import React from 'react'
import { CleanerData } from '../data'
import CleanerCard from './CleanerCard'
import SearchBar from '@/components/SearchBar'
import AddButton from '@/components/AddButton'

const CleanerList = () => {
    
  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex justify-center py-8'>
        <SearchBar

          placeholderText="Search City"
        />
      </div>
      <AddButton buttonText={'Add Cleaner'}/>
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {CleanerData.map((item, index) => (
      <CleanerCard     
        key={index}
        data={item}
    />
      
    ))}
  </div>
  </div>
  )
}

export default CleanerList