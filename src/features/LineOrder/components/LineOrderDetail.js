import React from 'react';
import { IMAGE_DEFAULT } from '../../../constants/common';

export const LineOrderDetail = ({ product, idx }) => {
  const { ten, hinhAnh, donGia, thue, soLuong } = product;
  const tongTienTruocThue = soLuong * donGia;
  const tongTienThue = soLuong * thue;
  return (
    <tr className='bg-white border-b text-center'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
      >
        {idx + 1}
      </th>
      <td className='py-4 px-6'>{ten}</td>
      <td className='py-4 px-6 flex justify-center'>
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
      <td className='py-4 px-6'>${tongTienTruocThue}</td>
      <td className='py-4 px-6'>${tongTienThue}</td>
    </tr>
  );
};
