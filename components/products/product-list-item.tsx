import React from 'react';
import { IProduct } from '../../lib/types';
import { AiFillStar } from 'react-icons/ai';

export const ProductListItem: React.FC<{ item: IProduct }> = ({ item }) => {
  const ratingArray = new Array(Math.ceil(item.rating)).fill(0).map((_, i) => {
    return { id: i };
  });
  return (
    <div className="card bg-white p-4">
      <div className="card-body">
        <div className="card-body__image-container">
          {item.discountAmount > 0 && <div className="avatar"></div>}
          <img src={item.image} />
        </div>
        <div className="mt-4 text-center">
          <h5 className="mb-3 text-truncate">{item.title}</h5>
          <p className="flex items-center justify-center mb-2">
            {ratingArray.map((value) => {
              return <AiFillStar key={value.id} color={'#ffa651'} />;
            })}
          </p>
          <h5 className="my-0">
            {item.discountAmount > 0 && (
              <span className="text-muted me-2">
                <del>$ {item.price}</del>
              </span>
            )}
            <b>$ {item.price - item.price * item.discountAmount}</b>
          </h5>
        </div>
        <div className="flex items-center font-bold justify-around w-full my-2">
          <button className="text-sm text-white p-4 w-28 py-2 bg-rose-600 rounded-xl">
            <a>Delete</a>
          </button>
          <button className="text-sm text-white font-bold w-28 py-2 bg-blue-400 rounded-xl">
            <a href={`/admin/products/${item.title}`}>Details</a>
          </button>
        </div>
      </div>
    </div>
  );
};
