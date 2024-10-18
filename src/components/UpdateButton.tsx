import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateButton = ({ onUpdate }: any) => {
  return (
    <button 
      onClick={onUpdate} 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
    >
      Update
    </button>
  );
};

export default UpdateButton;
