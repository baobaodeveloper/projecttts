import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSnackbar } from 'notistack';
import actions from '../actionTypes';
import { MyCartItem } from '../features/MyCart/components/MyCartItem';
import { ButtonPayment } from '../components/Button/ButtonPayment';
import { loadingActions } from '../components/Loading/loadingReducer';
import image_no_cart from '../assets/images/empty-cart.png';

export const MyCartPage = () => {
  const { enqueueSnackbar } = useSnackbar();
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
    dispatch(loadingActions.onLoading());
    const idOrder = uuidv4();
    const dataOrder = {
      id: idOrder,
      ten: uuidv4(),
      tongTruocThue: total.tongTruocThue,
      tongThue: total.tongThue,
      tongTien: total.tongThanhTien,
      createdAt: Date.now(),
    };
    const dataLineOrder = { key: idOrder, data };
    setTimeout(() => {
      dispatch(loadingActions.offLoading());

      dispatch({ type: actions.UPDATE_ORDER, data: dataOrder });
      dispatch({
        type: actions.UPDATE_LINEORDER,
        data: dataLineOrder,
      });
      dispatch({ type: actions.REMOVE_PRODUCT_IN_CART });
      enqueueSnackbar('Thanh toán thành công', {
        variant: 'success',
      });
      navigate('/orderPage');
    }, 1000);
  };

  return (
    <div className='container mx-auto flex-1 '>
      <h2 className='text-3xl text-center mt-3 '>
        Danh sách sản phẩm
      </h2>

      {myCart.length > 0 && (
        <>
          <div className='overflow-x-auto relative my-10'>
            <table className='w-full text-sm text-left text-gray-500 '>
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
                    Tổng trước thuế
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Tổng thuế
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Thành tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((cart, idx) => (
                    <MyCartItem key={cart.id} cart={cart} idx={idx} />
                  ))}
                <tr className='text-center text-gray-900 text-lg bg-white'>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap '
                  >
                    Tổng
                  </th>
                  <td colSpan={4} className='py-4 px-6'></td>
                  <td className='py-4 px-6'>
                    ${total.tongTruocThue}
                  </td>
                  <td className='py-4 px-6'>${total.tongThue}</td>
                  <td className='py-4 px-6'>
                    ${total.tongThanhTien}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-center mt-3'>
            <div onClick={handleAddOrder}>
              <ButtonPayment />
            </div>
          </div>
        </>
      )}
      {myCart.length === 0 && (
        <div className='flex justify-center items-center h-full'>
          <img className='h-[40vh]' src={image_no_cart} alt='' />
        </div>
      )}
    </div>
  );
};
