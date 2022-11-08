import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const Searchbar = () => {
  return (
    <div className="flex px-3 py-2  items-center bg-neutral-200 rounded-3xl">
      <FiSearch size={20} />
      <input
        className="focus:outline-none bg-neutral-200 px-2 mx-2 w-24 text-sm"
        placeholder="Search"
      />
    </div>
  );
};
