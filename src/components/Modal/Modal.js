import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CreateProductForm } from '../../features/CreateProduct/CreateProductForm';

export const Modal = ({ visible, setVisible }) => {
  const handleCloseModel = () => {
    setVisible(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 z-20 bg-opacity-70 bg-gray-500 justify-center items-center transition-all duration-200 flex ${
        visible ? 'visible' : 'hidden'
      }`}
    >
      <div className='min-w-[400px] relative bg-white rounded-lg shadow-md px-8 py-6'>
        <AiOutlineCloseCircle
          onClick={handleCloseModel}
          className='text-red-500 text-3xl absolute top-4 right-4 cursor-pointer'
        />
        <h3 className='text-center font-bold text-3xl mb-6'>
          Create Product
        </h3>
        <div>
          <CreateProductForm setVisible={setVisible} />
        </div>
      </div>
    </div>
  );
};
