import React from 'react';
import { IMAGE_DEFAULT } from '../../../constants/common';

export const MyCartItem = ({ cart, idx }) => {
  if (!cart) return;
  const { soLuong, hinhAnh, thue, donGia, ten, id } = cart;
  const tongTruocThue = soLuong * donGia;
  const tongThue = soLuong * thue;
  const thanhTien = tongTruocThue + tongThue;

  return (
    <tr className='bg-white border-b text-center'>
      <td className='py-4 px-6'>{idx + 1}</td>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
      >
        {ten}
      </th>
      <td className='py-4 px-6 flex justify-center items-center'>
        <div className='w-14 h-14 relative z-10 '>
          <img
            className='w-full h-full object-cover absolute top-0 left-0 z-30'
            src={hinhAnh}
            alt=''
          />
          <img
            className='w-full h-full object-cover absolute top-0 left-0 z-20'
            src={IMAGE_DEFAULT}
            alt=''
          />
        </div>
      </td>
      <td className='py-4 px-6'>{soLuong}</td>
      <td className='py-4 px-6'>${donGia}</td>
      <td className='py-4 px-6'>${tongTruocThue}</td>
      <td className='py-4 px-6'>${tongThue}</td>
      <td className='py-4 px-6'>${thanhTien}</td>
    </tr>
  );
};
