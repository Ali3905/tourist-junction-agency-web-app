import React, { useState } from 'react';
import DeleteButton from '../../components/DeleteButton';
import UpdateButton from '../../components/UpdateButton';
import Modal from '@/components/Modal';

const ServiceHistoryCard = ({ data, onDelete, onUpdate, photo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { 
    vehicleNumber,
    garageName,
    garageNumber,
    date,
    workDescription,
    bill,
  } = data;

  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      {/* Buttons positioned at the top-right corner */}
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>

      <div className="p-4 mt-8">
        {vehicleNumber && <h2 className="font-semibold text-lg">Number: {vehicleNumber}</h2>}
        {garageName && <p className="text-gray-600">Garage Name: {garageName}</p>}
        {garageNumber && <p className="text-gray-600">Garage No: {garageNumber}</p>}
        {date && <p className="text-gray-600">Date: {date}</p>}
        {workDescription && <p className="text-gray-600">Work Description: {workDescription}</p>}
     
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={openModal}
        >
          View Bill
        </button>
      </div>

      {/* Modal to view employee photo */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Bill Photo</h2>
        {photo ? (
          <img className="w-full h-auto object-cover" src={photo} alt="Employee" />
        ) : (
          <p>No photo available</p>
        )}
      </Modal>
    </div>
  );
};

export default ServiceHistoryCard;
