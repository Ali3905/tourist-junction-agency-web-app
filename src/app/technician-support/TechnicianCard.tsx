import Navbar from '@/components/Navbar'
import React from 'react'

const TechnicianCard = ({ title, imageSrc, description }) => {
  return (
    <>
     <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>

    </>
  )
}

export default TechnicianCard



