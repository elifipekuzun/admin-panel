import React from 'react';
import { ProductListItem } from './product-list-item';
import { ProductsFilterBar } from './products-filter-bar';
import { MdAddCircleOutline } from 'react-icons/md';

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
  return (
    <div className="grid grid-row-2 overflow-y-auto md:grid-cols-4 ml-8 md:ml-4">
      <div className="p-8 col-span-1">
        <ProductsFilterBar />
      </div>
      <div className="col-span-3 my-2 mr-8">
        <div className="grid grid-row-3 grid-cols-2 gap-3 ">
          <div className="col-span-2 p-4 relative">
            <button className="absolute right-0 top-0 flex items-center border-2 bg-slate-700 text-white text-xs p-3 rounded-3xl hover:bg-slate-900">
              <MdAddCircleOutline className="mr-2" size={18} />
              <a href="/admin/add-product">Add Product</a>
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
