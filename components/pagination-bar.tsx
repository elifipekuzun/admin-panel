import React, { useState } from 'react';

const ITEM_NUM_PER_PAGE = 5;

export const PaginationBar: React.FC<{
  items: any[];
  setCurrentPage: (value: number) => void;
  currentPage: number;
  onClickPrevious: () => void;
  onClickNext: () => void;
}> = ({ items, setCurrentPage, currentPage, onClickPrevious, onClickNext }) => {
  const pageNumber = Math.ceil(items.length / ITEM_NUM_PER_PAGE);
  const pageArray = new Array(pageNumber === 0 ? 1 : pageNumber)
    .fill(0)
    .map((_, i) => {
      return { id: 'page - ' + i };
    });

  return (
    <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 bg-slate-100">
      <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
        <span className="flex items-center font-semibold tracking-wide uppercase">
          Showing {(currentPage - 1) * ITEM_NUM_PER_PAGE + 1} -{' '}
          {currentPage * ITEM_NUM_PER_PAGE > items.length
            ? items.length
            : currentPage * ITEM_NUM_PER_PAGE}{' '}
          of {items.length}
        </span>
        <div className="flex mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
              <li>
                <button
                  onClick={onClickPrevious}
                  type="button"
                  aria-label="Previous"
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 border border-transparent active:bg-transparent dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10 hover:bg-slate-300"
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    aria-hidden
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule={'evenodd'}
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              {pageArray.map((p, i) => {
                return (
                  <li key={p.id}>
                    <button
                      onClick={() => setCurrentPage(i + 1)}
                      className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-3 py-1 rounded-md text-xs focus:outline-none border border-transparent  hover:bg-slate-300  hover:text-black ${
                        currentPage === i + 1 && 'bg-slate-700 text-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => {
                    if (currentPage < pageNumber) {
                      onClickNext();
                    }
                  }}
                  type="button"
                  aria-label="Next"
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10 hover:bg-slate-300"
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    aria-hidden
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule={'evenodd'}
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
