import React from 'react';

const DeleteButton = ({ onDelete }) => {
  return (
    <button 
      onClick={onDelete} 
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
