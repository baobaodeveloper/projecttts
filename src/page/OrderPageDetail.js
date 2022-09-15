import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LineOrderDetail } from '../features/LineOrder/components/LineOrderDetail';
import { OrderDetailItem } from '../features/Order/components/OrderDetailItem';

export const OrderPageDetail = () => {
  const params = useParams();
  const { order } = useSelector((state) => state.orderReducer);
  const { lineOrder } = useSelector(
    (state) => state.lineOrderReducer
  );
  const [orderCurrent, setOrderCurrent] = useState({
    id: '',
    ten: '',
    tongTruocThue: '',
    tongThue: '',
    tongTien: '',
  });
  const [lineOrderCurrent, setLineOrderCurrent] = useState([]);

  useEffect(() => {
    const indexOrderCurrent = order.findIndex(
      (item) => item.id === params.id
    );
    if (indexOrderCurrent !== -1) {
      setOrderCurrent((prev) => ({
        ...prev,
        ...order[indexOrderCurrent],
      }));
    }
    const indexLineOrderCurrent = lineOrder.findIndex(
      (item) => item.key === params.id
    );
    if (indexLineOrderCurrent !== -1) {
      setLineOrderCurrent(lineOrder[indexLineOrderCurrent].data);
    }
  }, [params, order, lineOrder]);

  return (
    <div className='container mx-auto min-h-[70vh]'>
      <h2 className='text-3xl text-center mt-3'>
        Thông tin đơn hàng
      </h2>
      <div className='my-10'>
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase '>
              <tr className='text-center bg-gray-100  '>
                <th scope='col' className='py-3 px-6 '>
                  Tên đơn hàng
                </th>
                <th scope='col' className='py-3 px-6'>
                  Tổng trước thuế
                </th>
                <th scope='col' className='py-3 px-6  '>
                  Tổng thuế
                </th>
                <th scope='col' className='py-3 px-6'>
                  Tổng tiền
                </th>
              </tr>
            </thead>
            <tbody>
              <OrderDetailItem orderCurrent={orderCurrent} />
            </tbody>
          </table>
        </div>

        <div className='overflow-x-auto relative mt-10'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-100 '>
              <tr className='text-center'>
                <th scope='col' className='py-3 px-6'>
                  STT
                </th>
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
                  Tổng tiền trước thuế
                </th>
                <th scope='col' className='py-3 px-6'>
                  Tổng tiền thuế
                </th>
              </tr>
            </thead>
            <tbody>
              {lineOrderCurrent.length > 0 &&
                lineOrderCurrent.map((item, idx) => (
                  <LineOrderDetail
                    idx={idx}
                    key={item.id}
                    product={item}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
