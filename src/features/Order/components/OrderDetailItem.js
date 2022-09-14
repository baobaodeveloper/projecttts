import React from 'react';

export const OrderDetailItem = ({ orderCurrent }) => {
  const { ten, tongTruocThue, tongThue, tongTien } = orderCurrent;
  return (
    <tr className='border-b border-gray-200 text-center'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50  '
      >
        {ten}
      </th>
      <td className='py-4 px-6'>${tongTruocThue}</td>
      <td className='py-4 px-6 bg-gray-50 '>${tongThue}</td>
      <td className='py-4 px-6'>${tongTien}</td>
    </tr>
  );
};
