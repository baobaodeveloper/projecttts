import React, { useState } from 'react';
import { IMAGE_DEFAULT } from '../../../constants/common';
import { RiSubtractFill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import actions from '../../../actionTypes';
import { useSnackbar } from 'notistack';

export const ProductItem = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [totalPay, setTotalPay] = useState(item?.donGia || 1);
  const [quality, setQuality] = useState(1);
  if (!item) return;
  const { id, hinhAnh, donGia, ten, thue } = item;

  const handleIncreaseQuality = () => {
    setQuality((pre) => pre + 1);
    setTotalPay((prev) => (prev += donGia));
  };
  const handleDecreaseQuality = () => {
    if (quality > 1) {
      setQuality((pre) => pre - 1);
      setTotalPay((pre) => (pre -= donGia));
    }
  };

  const handleAddProductInCart = () => {
    const data = {
      id,
      ten,
      hinhAnh,
      donGia,
      thue,
      soLuong: quality,
    };
    dispatch({ type: actions.UPDATE_MYCARD, data });
    setQuality(1);
    setTotalPay(donGia);
    enqueueSnackbar('Add product in cart success', {
      variant: 'success',
    });
  };
  return (
    <div className='max-w-xs rounded-md w-[320px] shrink-0 shadow-md '>
      <div className='relative w-full h-72 z-10'>
        <img
          src={hinhAnh ? hinhAnh : IMAGE_DEFAULT}
          alt={ten}
          className='object-cover text-transparent object-center h-full w-full rounded-t-md absolute top-0 left-0 z-30'
        />
        <img
          src={IMAGE_DEFAULT}
          alt={ten}
          className='object-cover object-center w-full h-full rounded-t-md absolute top-0 left-0 z-20 overflow-hidden'
        />
      </div>
      <div className='flex flex-col justify-between p-6 space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-semibold tracking-wide'>
            {ten}
          </h2>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-2'>
              <span className='font-semibold text-xl'>Price:</span>
              <p className='m-0 text-xl'>${totalPay}</p>
            </div>
            <div className='flex item-center text-lg gap-2'>
              <RiSubtractFill
                onClick={handleDecreaseQuality}
                className='text-xl cursor-pointer border-2 w-6 h-6'
              />
              <span className='leading-none flex justify-center items-center'>
                {quality}
              </span>
              <AiOutlinePlus
                onClick={handleIncreaseQuality}
                className='text-xl cursor-pointer text-green-500 border-2 w-6 h-6'
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleAddProductInCart}
          type='button'
          className='flex items-center justify-center w-full p-3 border-2 border-transparent font-semibold hover:text-white hover:bg-gray-500 rounded-lg text-xl text-gray-900 bg-white border-gray-500 transition-all duration-200'
        >
          Add to card
        </button>
      </div>
    </div>
  );
};
