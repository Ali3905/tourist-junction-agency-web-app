"use client"; // Mark it as a client component

import React, { useState } from 'react';
import Modal from '../../components/Modal'; // Adjust the import path as necessary
import UpdateButton from '@/components/UpdateButton';
import DeleteButton from '@/components/DeleteButton';


interface EmptyVehicleCardProps {
  data: EmptyVehicle;
  onUpdate?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const EmptyVehicleCard: React.FC<EmptyVehicleCardProps> = ({ data, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoIndex] = useState(0);

  const { vehicle, moreInformation, departurePlace, destinationPlace, departureTime, departureDate, mobileNumber, photos } = data;

  // const openModal = (index: number) => {
  //   setSelectedPhotoIndex(index);
  //   setIsModalOpen(true);
  // };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>
      <div className="p-4">
        <img className="w-full h-48 object-cover" src={photos[0]} alt={vehicle.number} />
        <h2 className="font-semibold text-lg">Vehicle No: {vehicle.number}</h2>
        <p className="text-gray-600">More Information: {moreInformation}</p>
        <p className="text-gray-600">Departure Place: {departurePlace}</p>
        <p className="text-gray-600">Destination Place: {destinationPlace}</p>
        <p className="text-gray-600">Departure Time: {departureTime.toString()}</p>
        <p className="text-gray-600">Departure Date: {departureDate.toString()}</p>
        <p className="text-gray-600">Mobile No: {mobileNumber}</p>
        {/* <p className="text-gray-600">Agency: {agency}</p> */}

        {/* <div className="mt-2">
          <h3 className="font-semibold text-md">Photos:</h3>
          <div className="flex space-x-2 mt-2">
            {photos.map((photo, index) => (
              <img
                key={index}
                className="w-20 h-20 object-cover cursor-pointer"
                src={photo}
                alt={`Vehicle photo ${index + 1}`}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div> */}
      </div>

      {photos.length > 0 && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <img className="w-full h-auto object-cover" src={photos[selectedPhotoIndex]} alt={`Vehicle photo ${selectedPhotoIndex + 1}`} />
        </Modal>
      )}
    </div>
  );
};

export default EmptyVehicleCard;
