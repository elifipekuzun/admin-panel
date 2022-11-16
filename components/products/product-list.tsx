import React, { useState } from 'react';
import { ProductListItem } from './product-list-item';
import { ProductsFilterBar } from './products-filter-bar';
import { IoAdd } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { IProduct } from '../../lib/types';

export const ProductList: React.FC<{ products: IProduct[] }> = ({
  products,
}) => {
  const router = useRouter();
  const [categoryType, setCategoryType] = useState('');
  return (
    <div className="w-full">
      <ProductsFilterBar getCategoryType={(value) => setCategoryType(value)} />
      <div>
        <div className="grid grid-row-2 grid-cols-2 gap-3 m-4">
          <h1 className="col-span-2 font-bold">
            Products / <span className="font-thin text-sm">Most Popular</span>
          </h1>
          {products.map((product) => {
            return (
              <div key={product._id}>
                <ProductListItem item={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
