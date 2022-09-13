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

const schema = yup
  .object()
  .shape(
    {
      ten: yup.string().required('Please enter product name'),
      hinhAnh: yup
        .string()
        .matches(/^[(http)(https)]/, {
          message: 'Link image invalid',
        })
        .required('Please enter link image'),
      donGia: yup
        .number()
        .min(1, 'Price must be greater than 1')
        .required('Please enter price product')
        .typeError('Please enter price'),
      thue: yup
        .number()
        .test(
          'donGia',
          'Tax must be less than price',
          function (value) {
            return this.parent.donGia > value;
          }
        )
        .required('Please enter tax')
        .typeError('Please enter tax'),
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
    const data = { ...values, id: uuidv4() };
    dispatch({ type: actions.UPDATE_LIST_PRODUCT, data });
    reset();
    setVisible(false);
    enqueueSnackbar('Create new product success', {
      variant: 'success',
    });
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
