import React from 'react';
import { useSelector } from 'react-redux';
import { MyCartItem } from '../features/MyCart/components/MyCartItem';

export const MyCartPage = () => {
  const { myCart } = useSelector((state) => state.myCartReducer);
  const totalPay = myCart.reduce(
    (acc, item) => (acc += item.soLuong * (item.donGia + item.thue)),
    0
  );
  return (
    <div className='container mx-auto min-h-[70vh]'>
      <div className='overflow-x-auto relative my-10'>
        <table className='w-full text-sm text-left text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
            <tr className='text-center'>
              <th scope='col' className='py-3 px-6'>
                Tên sản phẩm
              </th>
              <th scope='col' className='py-3 px-6'>
                Hình ảnh
              </th>
              <th scope='col' className='py-3 px-6'>
                Số lượng
              </th>
              <th scope='col' className='py-3 px-6'>
                Đơn giá
              </th>
              <th scope='col' className='py-3 px-6'>
                Tổng trước thuế
              </th>
              <th scope='col' className='py-3 px-6'>
                Tổng thuế
              </th>
              <th scope='col' className='py-3 px-6'>
                Thành tiền
              </th>
              <th scope='col' className='py-3 px-6'>
                Thanh toán
              </th>
            </tr>
          </thead>
          <tbody>
            {myCart.map((cart) => (
              <MyCartItem key={cart.id} cart={cart} />
            ))}
            <tr className='bg-white border-b text-center'>
              <th
                scope='row'
                className='py-4 px-6 font-medium text-xl text-gray-700 whitespace-nowrap  '
              >
                Tổng thành tiền
              </th>
              <td colSpan={5}></td>
              <td
                className='font-bold text-xl text-gray-700'
                colSpan={1}
              >
                ${totalPay}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
