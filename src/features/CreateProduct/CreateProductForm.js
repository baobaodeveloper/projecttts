import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { InputField } from '../../components/Input/InputField';
import { InputPrice } from '../../components/Input/InputPrice';
import actions from '../../actionTypes';
import { useSnackbar } from 'notistack';
import { loadingActions } from '../../components/Loading/loadingReducer';

const schema = yup
  .object()
  .shape(
    {
      ten: yup.string().required('Tên sản phảm không được để trống'),
      hinhAnh: yup
        .string()
        .matches(/^[(http)(https)]/, {
          message: 'Link hình ảnh phải bắt đầu http/https',
        })
        .required('Link hình ảnh không được để trống'),
      donGia: yup
        .number()
        .min(1, 'Giá phải lớn hơn $1')
        .required('Giá không được để trống')
        .typeError('Giá không được để trống'),
      thue: yup
        .number()
        .test('donGia', 'Thuế phải nhỏ hơn giá', function (value) {
          return this.parent.donGia > value;
        })
        .required('Thuế không được để trống')
        .typeError('Thuế không được để trống'),
    },

    [['donGia', 'thue']]
  )
  .required();

export const CreateProductForm = ({ setVisible }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ten: '',
      hinhAnh: '',
      donGia: 1,
      thue: 0,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    dispatch(loadingActions.onLoading());

    setTimeout(() => {
      dispatch(loadingActions.offLoading());

      const data = { ...values, id: uuidv4() };
      dispatch({ type: actions.UPDATE_LIST_PRODUCT, data });
      reset();
      setVisible(false);
      enqueueSnackbar('Tạo sản phẩm thành công', {
        variant: 'success',
      });
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className='flex flex-col gap-4'
    >
      <InputField
        name='ten'
        register={register}
        label='Tên sản phẩm'
        errors={errors}
      />
      <InputField
        register={register}
        name='hinhAnh'
        label='Link hình ảnh'
        errors={errors}
      />
      <div className='flex justify-between'>
        <InputPrice
          register={register}
          name='donGia'
          label='Giá'
          errors={errors}
        />
        <InputPrice
          register={register}
          name='thue'
          label='Thuế'
          errors={errors}
        />
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mt-5 mr-2 mb-2 '
      >
        Create
      </button>
    </form>
  );
};
