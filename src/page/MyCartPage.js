import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import actions from '../actionTypes';
import { MyCartItem } from '../features/MyCart/components/MyCartItem';

export const MyCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({
    tongTruocThue: 0,
    tongThue: 0,
    tongThanhTien: 0,
  });
  const { myCart } = useSelector((state) => state.myCartReducer);
  const { productList } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    const newData = myCart
      .map((item) => {
        const newObj = productList.filter(
          (cart) => cart.id === item.id
        );
        if (!newObj) return {};
        return { ...newObj[0], soLuong: item.soLuong };
      })
      .flatMap((item) => item);

    const tongTruocThue = newData?.reduce(
      (acc, item) => (acc += item.soLuong * item.donGia),
      0
    );
    const tongThue = newData?.reduce(
      (acc, item) => (acc += item.soLuong * item.thue),
      0
    );
    const tongThanhTien = tongTruocThue + tongThue;
    setTotal((prev) => ({
      ...prev,
      tongTruocThue,
      tongThue,
      tongThanhTien,
    }));

    setData(newData);
  }, [myCart, productList]);

  const handleAddOrder = () => {
    const idOrder = uuidv4();
    const dataOrder = {
      id: idOrder,
      ten: uuidv4(),
      tongTruocThue: total.tongTruocThue,
      tongThue: total.tongThue,
      tongTien: total.tongThanhTien,
    };
    const dataLineOrder = { key: idOrder, data };
    dispatch({ type: actions.UPDATE_ORDER, data: dataOrder });
    dispatch({
      type: actions.UPDATE_LINEORDER,
      data: dataLineOrder,
    });
    dispatch({ type: actions.REMOVE_PRODUCT_IN_CART });
    navigate('/orderPage');
  };

  return (
    <div className='container mx-auto min-h-[70vh]'>
      <h2 className='text-3xl text-center mt-3'>
        Danh sách sản phẩm
      </h2>
      <div className='overflow-x-auto relative my-10'>
        <table className='w-full text-sm text-left text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
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
                Tổng trước thuế
              </th>
              <th scope='col' className='py-3 px-6'>
                Tổng thuế
              </th>
              <th scope='col' className='py-3 px-6'>
                Thành tiền
              </th>
              <th scope='col' className='py-3 px-6'>
                Tổng
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((cart, idx) => (
                <MyCartItem key={cart.id} cart={cart} idx={idx} />
              ))}
            <tr className='text-center text-gray-900 text-lg'>
              <th
                scope='row'
                className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
              >
                Tổng
              </th>
              <td colSpan={4} className='py-4 px-6'></td>
              <td className='py-4 px-6'>${total.tongTruocThue}</td>
              <td className='py-4 px-6'>${total.tongThue}</td>
              <td className='py-4 px-6'>${total.tongThanhTien}</td>
              <td className='py-4 px-6'>
                $
                {total.tongThanhTien +
                  total.tongThue +
                  total.tongTruocThue}
              </td>
            </tr>
          </tbody>
        </table>

        <div className='flex justify-center mt-3'>
          <button
            onClick={handleAddOrder}
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2  focus:outline-none '
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};
