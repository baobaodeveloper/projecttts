import React from 'react';
import { BsShop } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import { IoCreateOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { calcTotalProduct } from '../../utils/common';

export const Header = ({ setVisible }) => {
  const navigate = useNavigate();
  const { order } = useSelector((state) => state.orderReducer);
  const { myCart } = useSelector((state) => state.myCartReducer);
  const handleOpenModal = () => {
    setVisible(true);
    navigate('/');
  };
  const handleClickShoppingCart = () => {
    navigate('/cart');
  };
  const handleClickOrderList = () => {
    navigate('/orderPage');
  };

  return (
    <header className='p-4 bg-blue-400 '>
      <div className='container flex justify-between items-center h-16 mx-auto'>
        <NavLink to='/' className='flex items-center'>
          <BsShop className='text-white text-4xl' />
        </NavLink>

        <div className='items-center flex-shrink-0 flex space-x-8'>
          <button
            onClick={handleOpenModal}
            className='text-4xl font-semibold rounded  text-white  hover:scale-110 transition-all'
          >
            <IoCreateOutline />
          </button>
          <button
            onClick={handleClickShoppingCart}
            className='self-center relative text-4xl font-semibold rounded  text-white  hover:scale-110 transition-all'
          >
            <HiOutlineShoppingCart className='w-9' />
            <span className='absolute flex justify-center items-center -top-3 -right-2 w-6 h-6 text-sm rounded-full bg-red-500 text-white'>
              {calcTotalProduct(myCart)}
            </span>
          </button>
          <button
            onClick={handleClickOrderList}
            className='self-center relative text-4xl font-semibold rounded  text-white  hover:scale-110 transition-all'
          >
            <FaClipboardList className='w-9' />
            <span className='absolute flex justify-center items-center -top-3 -right-2 w-6 h-6 text-sm rounded-full bg-red-500 text-white'>
              {order.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
