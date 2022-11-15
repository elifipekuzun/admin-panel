import React from 'react';
import { ProductListItem } from './product-list-item';
import { ProductsFilterBar } from './products-filter-bar';
import { IoAdd } from 'react-icons/io5';
import { useRouter } from 'next/router';

const products = [
  {
    title: 'Half sleeve T-shirt',
    price: 500,
    image:
      'https://themesbrand.com/skote/layouts/assets/images/product/img-1.png',
    discountAmount: 0,
    rating: 3,
    categoryName: 't-shirt',
  },
  {
    title: 'Half sleeve T-shirt',
    price: 500,
    image:
      'https://themesbrand.com/skote/layouts/assets/images/product/img-1.png',
    discountAmount: 0,
    rating: 3,
    categoryName: 't-shirt',
  },
  {
    title: 'Half sleeve T-shirt',
    price: 500,
    image:
      'https://themesbrand.com/skote/layouts/assets/images/product/img-1.png',
    discountAmount: 0,
    rating: 3,
    categoryName: 't-shirt',
  },
];

export const ProductList: React.FC = () => {
  const router = useRouter();
  return (
    <div className="grid grid-row-2 overflow-y-auto md:grid-cols-4 ml-8 md:ml-4">
      <div className="p-8 col-span-1">
        <ProductsFilterBar />
      </div>
      <div className="col-span-3 my-2 mr-8">
        <div className="grid grid-row-3 grid-cols-2 gap-3 mt-3">
          <div></div>
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
          <h1 className="col-span-2 font-bold">
            Products / <span className="font-thin text-sm">Most Popular</span>
          </h1>
          {products.map((product, i) => {
            return (
              <div key={i}>
                <ProductListItem item={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
