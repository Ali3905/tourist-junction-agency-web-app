"use client"; // Mark it as a client component

import React, { useState } from 'react';
import Modal from '../../components/Modal'; // Adjust the import path as necessary

interface TechnicianCardProps {
  data: Technician;
}

const TechnicianCard: React.FC<TechnicianCardProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { name, state, city, mobileNumber, alternateNumber, vehicleType } = data;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      {/* <img className="w-full h-48 object-cover" src={photo} alt="Technician" /> */}
      <div className="p-4">
        <h2 className="font-semibold text-lg">Name: {name}</h2>
        <p className="text-gray-600">State: {state}</p>
        <p className="text-gray-600">City: {city}</p>
        <p className="text-gray-600">Mobile No: {mobileNumber}</p>
        <p className="text-gray-600">Alternate No: {alternateNumber}</p>
        <p className="text-gray-600">Vehicle Type: {vehicleType}</p>

        {/* <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={openModal}
        >
          View Photo
        </button> */}
      </div>
{/* 
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Technician Photo</h2>
        <img className="w-full h-auto object-cover" src={photo} alt="Technician" />
      </Modal> */}
    </div>
  );
};

export default TechnicianCard;
