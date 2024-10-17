"use client"; // Mark it as a client component

import React, { useState } from 'react';
import Modal from './Modal';
import AddButton from './AddButton';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

type DriverCardProps = {
  data: Driver;
  onUpdate?: () => void;
  onDelete?: () => void;
}

const DriverCard: React.FC<DriverCardProps> = ({ data, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState<null | string>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling password visibility

  const { name, password, vehicleType, mobileNumber, city, state, aadharCard, license, photo } = data;


  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300 relative">
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>

      <div className='flex'>
        <div className="p-4">
          <h2 className="font-semibold text-lg">Name: {name}</h2>

          {/* Password with Show/Hide functionality */}
          <div className="flex items-center space-x-2">
            <p className="text-gray-600">
              Password: {isPasswordVisible ? password : '••••••••'}
            </p>
            <button
              className="text-blue-500 underline"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>

          <p className="text-gray-600">Vehicle Type: {vehicleType}</p>
          <p className="text-gray-600">Mob No: {mobileNumber}</p>
          <p className="text-gray-600">State: {state}</p>
          <p className="text-gray-600">City: {city}</p>


          <span className='flex flex-col gap-2'>
            <AddButton onClick={() => setIsModalOpen("license")} buttonText={'View License'} />
            <AddButton onClick={() => setIsModalOpen("aadhar")} buttonText={'View Aadhar'} />
          </span>

        </div>
        <img className="h-40 w-40 rounded-full object-cover mt-[40px]" width={40} height={40} src={photo} alt="Driver" />
      </div>

      <Modal isOpen={isModalOpen ? true : false} onClose={() => setIsModalOpen(null)}>
        <h2 className="text-lg font-semibold mb-4">{isModalOpen} Photo</h2>
        <img className="w-full h-auto object-cover" src={isModalOpen === "license" ? license : aadharCard} alt="Driver" />
      </Modal>

    </div>
  );
};

export default DriverCard;
