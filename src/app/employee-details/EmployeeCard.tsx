"use client"; // Mark it as a client component

import React, { useState } from 'react';
import Modal from '../../components/Modal';
import UpdateButton from '@/components/UpdateButton';
import DeleteButton from '@/components/DeleteButton';
import Image from 'next/image';

interface EmployeeData {
  name: string;
  password: string;
  mobileNumber: string;
  employeeType: string;
  state: string;
  city: string;
  aadharCard: string;
  photo: string;
}

interface EmployeeCardProps {
  data: EmployeeData;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ data, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // For toggling password visibility

  const { name, password, mobileNumber, employeeType, state, city, aadharCard, photo } = data;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative sm:w-[30%] max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300">
      <div className="absolute top-2 right-2 space-x-2">
        <UpdateButton onUpdate={onUpdate} />
        <DeleteButton onDelete={onDelete} />
      </div>
     
      <div className='flex mt-10'>
     
      <div className="p-4">
        <h2 className="font-semibold text-lg">Name:{name}</h2>

        {/* Password with Show/Hide functionality */}
        <div className="flex items-center space-x-2">
          <p className="text-gray-600">
            Password:{isPasswordVisible ? password : '••••••••'}
          </p>
          <button
            className="text-blue-500 underline"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        </div>

        <p className="text-gray-600">Mob No:{mobileNumber}</p>
        <p className="text-gray-600">Employee Type:{employeeType}</p>
        <p className="text-gray-600">State: {state}</p>
        <p className="text-gray-600">City: {city}</p>
        {/* <p className="text-gray-600">Adhar{aadharCard}</p> */}

        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={openModal}
        >
          View Adhar
        </button>
      </div>
      <Image className=" rounded-full h-40 w-40 object-cover" width={48} height={48} src={photo} alt="Employee" />
      </div>





      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Employee Photo</h2>
        <img className="w-full h-auto object-cover" src={photo} alt="Employee" />
      </Modal>
    </div>
  );
};

export default EmployeeCard;
