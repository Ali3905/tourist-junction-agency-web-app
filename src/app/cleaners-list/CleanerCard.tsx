"use client"; // Mark it as a client component

import React, { useState } from 'react';
import Modal from '../../components/Modal'; // Adjust the import path as necessary
import Image from 'next/image';
import UpdateButton from '@/components/UpdateButton';
import DeleteButton from '@/components/DeleteButton';
import AddButton from '@/components/AddButton';

interface CleanerData {
  name: string;
  mobileNumber: string;
  password: string;
  city: string;
  state: string;
  aadharCard: string;
  photo: string;
}

interface CleanerCardProps {
  data: CleanerData;
  onUpdate: () => void;
  onDelete: () => void;
}

const CleanerCard: React.FC<CleanerCardProps> = ({ data, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling password visibility

  const { name, mobileNumber, password, city, state, aadharCard, photo } = data;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative sm:w-[30%] max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      {/* Update and Delete Buttons */}
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>

      {/* Card Content */}
      <div className="flex mt-8 items-center">
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

          <p className="text-gray-600">Mobile No: {mobileNumber}</p>
          <p className="text-gray-600">City: {city}</p>
          <p className="text-gray-600">State: {state}</p>
          {/* <p className="text-gray-600">Aadhar: {aadharCard}</p> */}

          {/* View Aadhar Button */}
          <AddButton buttonText={'View Aadhar'} onClick={openModal} />
        </div>

        <Image
          className="rounded-full h-40 w-40 object-cover"
          width={160}
          height={160}
          src={photo}
          alt="Employee"
        />
      </div>

      {/* Modal to display Aadhar Photo */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Aadhar Photo</h2>
        {aadharCard ? (
          <img className="w-full h-auto object-cover" src={aadharCard} alt="Aadhar Card" />
        ) : (
          <p>No Aadhar photo available</p>
        )}
      </Modal>
    </div>
  );
};

export default CleanerCard;
