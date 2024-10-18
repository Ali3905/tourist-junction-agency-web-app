import React from 'react';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DeleteButton = ({ onDelete }: any) => {
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
