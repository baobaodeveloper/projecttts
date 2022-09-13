import React from 'react';
import { lowerCaseFirstCharactor } from '../../utils/common';

export const InputField = ({ name, label, register, errors }) => {
  if (!name && !label && !register) return;

  return (
    <div>
      <label
        htmlFor='product_name'
        className='block mb-2 text-[18px] font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
      <input
        {...register(name)}
        type='text'
        id='product_name'
        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
        placeholder={`Nhập ${lowerCaseFirstCharactor(label)}`}
      />
      <span className='text-red-500'>
        {errors?.[name]?.message || ''}
      </span>
    </div>
  );
};
