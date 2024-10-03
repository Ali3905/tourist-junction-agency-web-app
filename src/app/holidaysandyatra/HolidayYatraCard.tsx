import DeleteButton from '@/components/DeleteButton';
import UpdateButton from '@/components/UpdateButton';
import React from 'react'

type HolidayYatraCardProps = {
  data: Tour,
  onUpdate?: (id: string) => void,
  onDelete?: () => void,
}

const HolidayYatraCard = ({ data, onUpdate, onDelete }: HolidayYatraCardProps) => {
  const { name, primaryMobileNumber, secondaryMobileNumber, officeAddress, location, photos } = data;
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
          {/* Buttons positioned at the top-right corner */}
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>
        <img className="w-full h-48 object-cover" src={photos[0]} alt={name} />
        <div className="p-4">
           
          <h2 className="font-semibold text-lg">Tour Name:{name}</h2>
          <p className="text-gray-600">Mob No:{primaryMobileNumber}</p>
          <p className="text-gray-600">Mob No:{secondaryMobileNumber}</p>
          <p className="text-gray-600">Address: {officeAddress}</p>
          <p className="text-gray-600">Location: {location}</p>
        </div>
    </div>
  )
}

export default HolidayYatraCard;
