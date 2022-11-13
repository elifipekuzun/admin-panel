import React, { useState } from 'react';
import Link from 'next/link';
import {
  MdOutlineDashboard,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { FiUsers, FiCompass } from 'react-icons/fi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { DropdownMenu } from '../dropdown-menu';

interface DropdownProps {
  href: string;
  title: string;
}

const productDropdown: DropdownProps[] = [
  { href: '/admin/products', title: 'View All Products' },
  { href: '/admin/add-product', title: 'Add Product' },
];
const categoryDropdown: DropdownProps[] = [
  { href: '/admin/category', title: 'View All Category' },
  { href: '/admin/category/add-category', title: 'Add Category' },
];
export const NavigationbarList: React.FC = () => {
  const [toggleProductsDropdown, setToggleProductsDropdown] = useState(false);
  const [toggleCategoryDropdown, setToggleCategoryDropdown] = useState(false);
  return (
    <ul>
      <li className="flex mx-16 w-full items-center my-4 text-white/60">
        <MdOutlineDashboard className="mr-3" size={24} />
        <Link href={'/admin'}>Dashboard</Link>
      </li>
      <li
        className={`w-full py-3 my-4 text-white/60 hover:cursor-pointer ${
          toggleProductsDropdown && `bg-slate-800`
        }`}
        onClick={() => {
          if (toggleCategoryDropdown) {
            setToggleCategoryDropdown(!toggleCategoryDropdown);
          }
          setToggleProductsDropdown(!toggleProductsDropdown);
        }}
      >
        <div className="flex px-16 items-center justify-between w-full">
          <RiShoppingBag3Line className="mr-3" size={24} />
          <span>Products</span>
          {toggleProductsDropdown ? (
            <MdOutlineKeyboardArrowUp className="ml-3" />
          ) : (
            <MdOutlineKeyboardArrowDown className="ml-3" />
          )}
        </div>
        {toggleProductsDropdown && (
          <DropdownMenu
            logout={false}
            textColor="text-white/60"
            bgColor="bg-slate-800"
            dropdownItems={productDropdown}
          />
        )}
      </li>
      <li
        className={`w-full py-3 my-4 text-white/60 hover:cursor-pointer ${
          toggleCategoryDropdown && 'bg-slate-800 '
        }`}
        onClick={() => {
          if (toggleProductsDropdown) {
            setToggleProductsDropdown(!toggleProductsDropdown);
          }
          setToggleCategoryDropdown(!toggleCategoryDropdown);
        }}
      >
        <div className="flex px-16 w-full items-center justify-between">
          <AiOutlineUnorderedList className="mr-3" size={24} />
          <span>Category</span>
          {toggleCategoryDropdown ? (
            <MdOutlineKeyboardArrowUp className="ml-3" />
          ) : (
            <MdOutlineKeyboardArrowDown className="ml-3" />
          )}
        </div>
        {toggleCategoryDropdown && (
          <DropdownMenu
            logout={false}
            textColor="text-white/60"
            bgColor="bg-slate-800"
            dropdownItems={categoryDropdown}
          />
        )}
      </li>
      <li className="py-3 w-full  my-4 text-white/60 hover:cursor-pointer">
        <div className="flex mx-16 items-center justify-between">
          <FiUsers className="mr-3" size={24} />
          <span>Customers</span>
          <MdOutlineKeyboardArrowDown className="ml-3" />
        </div>
      </li>
      <li className="py-3 flex mx-16 w-full items-center my-4 text-white/60">
        <FiCompass className="mr-3" size={24} />
        <Link href={'/admin/orders'}>Orders</Link>
      </li>
    </ul>
  );
};
