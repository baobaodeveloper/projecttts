import React, { useState } from 'react';
import { BsShop } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { calcTotalProduct } from '../../utils/common';

export const Header = ({ setVisible }) => {
  const navigate = useNavigate();
  const { myCart } = useSelector((state) => state.myCartReducer);
  const handleOpenModal = () => {
    setVisible(true);
    navigate('/');
  };
  const handleClickShoppingCart = () => {
    navigate('/cart');
  };

  return (
    <header className='p-4 bg-blue-400 '>
      <div className='container flex justify-between h-16 mx-auto'>
        <NavLink to='/' className='flex items-center'>
          <BsShop className='text-white text-4xl' />
        </NavLink>

        <div className='items-center flex-shrink-0 flex space-x-8'>
          <button
            onClick={handleOpenModal}
            className='self-center px-8 py-3 rounded bg-green-500 text-white font-semibold text-lg hover:scale-110 transition-all'
          >
            Add new product
          </button>
          <button
            onClick={handleClickShoppingCart}
            className='self-center relative text-4xl font-semibold rounded  text-white  hover:scale-110 transition-all'
          >
            <HiOutlineShoppingCart />
            <span className='absolute flex justify-center items-center -top-3 -right-2 w-6 h-6 text-sm rounded-full bg-red-500 text-white'>
              {calcTotalProduct(myCart)}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
