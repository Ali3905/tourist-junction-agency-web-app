"use client"
import React from 'react'
import { TechnicianData } from '../data'
import TechnicianCard from './TechnicianCard'

const TechnicianList = ({ data }: { data: Technician[] }) => {

  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8 max-w-[1400px] mx-auto">
      {data.map((item, index) => (
        <TechnicianCard
          key={index}
          data={item}
        />

      ))}
    </div>
  )
}

export default TechnicianList