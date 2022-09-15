import React from 'react';

export const Pagination = ({ totalPage, setPage, page }) => {
  const handleChangePage = (page) => {
    setPage(page);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <nav aria-label='Page navigation example'>
      <ul className='inline-flex items-center -space-x-px'>
        <li onClick={handlePrevPage}>
          <button className='block py-2  px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
            <span className='sr-only'>Previous</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </li>
        {Array.from(new Array(totalPage), (_, idx) => (
          <li key={idx} onClick={() => handleChangePage(idx + 1)}>
            <button
              className={`py-2 leading-5 px-3  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                idx + 1 === page ? 'text-white bg-blue-500' : ''
              }`}
            >
              {idx + 1}
            </button>
          </li>
        ))}

        <li onClick={handleNextPage}>
          <button className='block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
            <span className='sr-only'>Next</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
