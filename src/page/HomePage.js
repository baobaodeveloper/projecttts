import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../components/Pagination/Pagination';
import { Skeleton } from '../components/Skeleton/Skeleton';
import {
  LIMIT_LIST_PRODUCT,
  NUMBER_SKELETON,
} from '../constants/common';
import { ProductItem } from '../features/Product/components/ProductItem';

export const HomePage = () => {
  const { productList } = useSelector(
    (state) => state.productReducer
  );
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    let newList = [];
    if (productList.length >= LIMIT_LIST_PRODUCT) {
      const chunkSize = LIMIT_LIST_PRODUCT;
      for (let i = 0; i < productList.length; i += chunkSize) {
        newList.push(productList.slice(i, i + chunkSize));
      }
      setTotalPage(newList.length > 0 ? newList.length : 1);
      setData(newList[page - 1]);
    } else {
      setData(productList);
    }
  }, [productList, page]);
  if (!productList) return;
  return (
    <div className='container mx-auto my-10 min-h-[70vh]'>
      <div className='flex justify-center gap-6 flex-wrap '>
        {data?.length > 0
          ? data.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))
          : Array.from(new Array(NUMBER_SKELETON), (item, idx) => (
              <Skeleton key={idx} />
            ))}
      </div>
      <div className='text-center mt-6'>
        <Pagination
          page={page}
          totalPage={totalPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
