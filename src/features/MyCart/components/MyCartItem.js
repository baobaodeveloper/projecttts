import React from 'react';
import { IMAGE_DEFAULT } from '../../../constants/common';

export const MyCartItem = ({ cart }) => {
  if (!cart) return;
  const tongTruocThue = cart?.soLuong * cart?.donGia;
  const tongThue = cart?.soLuong * cart?.thue;
  const thanhTien = tongTruocThue + tongThue;
  return (
    <tr className='bg-white border-b text-center'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
      >
        {cart?.ten}
      </th>
      <td className='py-4 px-6 flex justify-center items-center'>
        <div className='w-14 h-14 relative z-10 '>
          <img
            className='w-full h-full object-cover absolute top-0 left-0 z-30'
            src={cart?.hinhAnh}
            alt=''
          />
          <img
            className='w-full h-full object-cover absolute top-0 left-0 z-20'
            src={IMAGE_DEFAULT}
            alt=''
          />
        </div>
      </td>
      <td className='py-4 px-6'>{cart?.soLuong}</td>
      <td className='py-4 px-6'>${cart?.donGia}</td>
      <td className='py-4 px-6'>${tongTruocThue}</td>
      <td className='py-4 px-6'>${tongThue}</td>
      <td className='py-4 px-6'>${thanhTien}</td>
      <td className='py-4 px-6'>
        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none '
        >
          Thanh toán
        </button>
      </td>
    </tr>
  );
};
