import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from '../features/Product/components/ProductItem';

export const HomePage = () => {
  const { productList } = useSelector(
    (state) => state.productReducer
  );

  if (!productList) return;
  return (
    <div className='container mx-auto my-10 min-h-[70vh]'>
      <div className='flex justify-center gap-6 flex-wrap '>
        {productList.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
