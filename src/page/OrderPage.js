import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../features/Order/components/OrderItem';
import image_no_order from '../assets/images/empty-box.png';

export const OrderPage = () => {
  const { order } = useSelector((state) => state.orderReducer);
  console.log(order);
  return (
    <div className='container mx-auto '>
      <h2 className='text-3xl text-center mt-3'>
        Danh sách đơn hàng đã đặt
      </h2>
      {order.length > 0 && (
        <div className='overflow-x-auto relative my-10'>
          <table className='w-full text-sm text-left text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  STT
                </th>
                <th scope='col' className='py-3 px-6'>
                  Tên đơn hàng
                </th>

                <th scope='col' className='py-3 px-6 text-center'>
                  Tổng tiền
                </th>
                <th scope='col' className='py-3 px-6 text-center'>
                  Ngày
                </th>
              </tr>
            </thead>
            <tbody>
              {order.length > 0 &&
                order.map((item, idx) => (
                  <OrderItem key={item.id} idx={idx} item={item} />
                ))}
            </tbody>
          </table>
        </div>
      )}

      {order.length === 0 && (
        <div className='flex justify-center items-center h-full'>
          <div>
            <img className='h-[40vh]' src={image_no_order} alt='' />
          </div>
        </div>
      )}
    </div>
  );
};
