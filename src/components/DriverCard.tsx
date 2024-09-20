"use client"; // Mark it as a client component

import React, { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import AddButton from './AddButton';

interface DriverData {
  name: string;
  password: string;
  vehicleType: string;
  mobileNumber: string;
  city: string;
  state: string;
  aadharCard: string;
  license: string;
  photo: string;
}

interface DriverCardProps {
  data: DriverData;
}

const DriverCard: React.FC<DriverCardProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling password visibility

  const { name, password, vehicleType, mobileNumber, city, state, aadharCard, license, photo } = data;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">

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
       <AddButton onClick={openModal} buttonText={'View License'}/>
       <AddButton onClick={openModal} buttonText={'View Aadhar'}/>
       </span>
        
      </div>
      <img className="h-40 w-40 rounded-full object-cover" width={40} height={40} src={photo} alt="Driver" />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Addhar Photo</h2>
        <img className="w-full h-auto object-cover" src={photo} alt="Driver" />
      </Modal>
      
    </div>
  );
};

export default DriverCard;
