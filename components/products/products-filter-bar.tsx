import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IoAdd } from 'react-icons/io5';

export const ProductsFilterBar: React.FC<{
  getCategoryType: (value: string) => void;
}> = ({ getCategoryType }) => {
  const [categoryType, setCategoryType] = useState('');
  const router = useRouter();
  return (
    <section className="bg-white p-4 w-full">
      <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 lg:flex xl:flex">
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <input
            className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md  dark:bg-gray-700 border h-12 text-sm block w-full bg-gray-100 border-transparent "
            type={'search'}
            placeholder="Search by category type"
            value={categoryType}
            onChange={(e) => setCategoryType(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getCategoryType(categoryType);
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <input
            className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md  dark:bg-gray-700 border h-12 text-sm block w-full bg-gray-100 border-transparent "
            placeholder="Search by product title"
          />
        </div>
        <div className="w-full md:w-56 lg:w-56 xl:w-56">
          <button
            onClick={() => {
              router.push('/admin/products/add-product');
            }}
            type="button"
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-slate-700 hover:bg-slate-900 border-transparent w-full rounded-md h-12"
          >
            <IoAdd size={20} className="mr-3" />
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};
