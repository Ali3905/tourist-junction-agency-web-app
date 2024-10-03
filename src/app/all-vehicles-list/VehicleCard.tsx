import React from 'react';
import DeleteButton from '../../components/DeleteButton';
import UpdateButton from '../../components/UpdateButton';

type VehicleCardProps = {
  data: Vehicle,
  onDelete?: (id: string) => void,
  onUpdate?: (id: string) => void,
}

const VehicleCard = ({ data, onDelete, onUpdate }: VehicleCardProps) => {
  const { 
    number, 
    seatingCapacity, 
    model, 
    bodyType, 
    chassisBrand, 
    location, 
    isAC, 
    contactNumber,
    noOfTyres,
    isForRent, 
    amenities = [], // Default to empty array if not provided
     photos
  } = data;

  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      {<img className="w-full h-48 object-cover" src={photos[0]} alt={number} />}

      {/* Buttons positioned at the top-right corner */}
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>

      <div className="p-4">
        {number && <h2 className="font-semibold text-lg">Number: {number}</h2>}
        {seatingCapacity && <p className="text-gray-600">Seating Capacity: {seatingCapacity}</p>}
        {model && <p className="text-gray-600">Model: {model}</p>}
        {bodyType && <p className="text-gray-600">Body Type: {bodyType}</p>}
        {contactNumber && <p className="text-gray-600">Contact No: {contactNumber}</p>}
        {noOfTyres && <p className="text-gray-600">No Of Tyres: {noOfTyres}</p>}
        {chassisBrand && <p className="text-gray-600">Chassis Brand: {chassisBrand}</p>}
        {location && <p className="text-gray-600">Location: {location}</p>}
        {typeof isAC !== 'undefined' && <p className="text-gray-600">{isAC ? 'AC' : 'Non-AC'}</p>}
        {typeof isForRent !== 'undefined' && <p className="text-gray-600">{isForRent ? 'For Rent' : 'Not For Rent'}</p>}
        {amenities.length > 0 && <p className="text-gray-600">Amenities: {amenities.join(', ')}</p>}
      </div>
    </div>
  );
};

export default VehicleCard;
