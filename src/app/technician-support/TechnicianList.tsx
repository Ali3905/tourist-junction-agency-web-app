"use client"
import React from 'react'
import { TechnicianData } from '../data'
import TechnicianCard from './TechnicianCard'

const TechnicianList = () => {
    
  return (
    <div className='max-w-[1400px] mx-auto'>
    <div className="flex justify-center space-x-4 flex-wrap py-8 ">
    {TechnicianData.map((item, index) => (
      <TechnicianCard     
        key={index}
        data={item}
    />
      
    ))}
  </div>
  </div>
  )
}

export default TechnicianList