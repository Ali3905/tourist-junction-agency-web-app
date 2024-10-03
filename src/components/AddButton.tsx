import React from 'react'

type AddButtonProps = {
  onClick: () => void;
  buttonText: string;
}

const AddButton = ({ onClick, buttonText }: AddButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
    >
      {buttonText}
    </button>
  )
}

export default AddButton