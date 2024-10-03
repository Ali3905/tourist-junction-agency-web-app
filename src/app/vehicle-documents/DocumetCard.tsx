"use client"
import AddButton from '@/components/AddButton';
import Modal from '../../components/Modal'; // Adjust the path as needed
import React, { useState } from 'react';

const DocumetCard = ({ data }: { data: Vehicle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);



  const openModal = (document: string) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div className='relative sm:w-[30%] max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg mt-6 transition-shadow duration-300 px-2 py-4 border'>
      <p>Vehicle Number: {data.number}</p>
      <div className='flex gap-2 flex-wrap'>
        <AddButton buttonText={'View RC'} onClick={() => openModal('RC')} />
        <AddButton buttonText={'View Insurance'} onClick={() => openModal('insurance')} />
        <AddButton buttonText={'View Permit'} onClick={() => openModal('permit')} />
        <AddButton buttonText={'View Fitness'} onClick={() => openModal('fitness')} />
        <AddButton buttonText={'View Tax'} onClick={() => openModal('tax')} />
        <AddButton buttonText={'View PUC'} onClick={() => openModal('PUC')} />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">{selectedDocument} Document</h2>
        {selectedDocument && data[selectedDocument] ? (
          <img className="w-full h-auto object-cover" src={data[selectedDocument]} alt={`${selectedDocument} Document`} />
        ) : (
          <p>No document image available</p>
        )}
      </Modal>
    </div>
  );
};

export default DocumetCard;
