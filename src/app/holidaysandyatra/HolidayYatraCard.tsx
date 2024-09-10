import React from 'react'

const HolidayYatraCard = ({ tourName, mobNoOne,mobNoTwo,address,location, imageSrc   }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={tourName} />
        <div className="p-4">
        <h2 className="font-semibold text-lg">{tourName}</h2>
        <p className="text-gray-600">{mobNoOne}</p>
        <p className="text-gray-600">{mobNoTwo}</p>
        <p className="text-gray-600">{address}</p>
        <p className="text-gray-600">{location}</p>
        </div>

  </div>
  )
}

export default HolidayYatraCard


