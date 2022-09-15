import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export const OrderItem = ({ item, idx }) => {
  const navigate = useNavigate();
  const { ten, tongTien, id, createdAt } = item;
  const handleNavigateOrderPageDetail = () => {
    navigate(`/orderPageDetail/${id}`);
  };

  return (
    <tr
      onClick={handleNavigateOrderPageDetail}
      className='bg-white border-b cursor-pointer text-gray-900 hover:text-white hover:bg-blue-300'
    >
      <td className='py-4 px-6'>{idx + 1}</td>
      <th
        scope='row'
        className='py-4 px-6 font-medium  whitespace-nowrap '
      >
        {ten}
      </th>
      <td className='py-4 px-6 text-center'>${tongTien}</td>
      <td className='py-4 px-6 text-center'>
        {moment(createdAt).add(10, 'days').calendar()}
      </td>
    </tr>
  );
};
