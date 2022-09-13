import React from 'react';

export const InputPrice = ({ name, label, register, errors }) => {
  if (!name && !label) return;

  return (
    <div className='w-[40%]'>
      <label
        htmlFor='product_name'
        className='block mb-2 text-[18px] font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
      <input
        {...register(name)}
        type='number'
        id='product_name'
        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
        placeholder={`Nhập ${label}`}
      />
      <span className='text-red-500'>
        {errors?.[name]?.message || ''}
      </span>
    </div>
  );
};
