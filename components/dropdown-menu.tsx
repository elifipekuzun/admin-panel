import React, { useState } from 'react';
import Link from 'next/link';
import animation from '../styles/animation.module.css';
import { AiOutlineLogout } from 'react-icons/ai';
import { signOut } from 'next-auth/react';

interface DropdownProps {
  href: string;
  title: string;
}

export const DropdownMenu: React.FC<{
  dropdownItems: DropdownProps[];
  bgColor: string;
  textColor: string;
  logout: boolean;
}> = ({ dropdownItems, bgColor, textColor, logout }) => {
  const logoutHandler = async () => {
    await signOut();
  };
  return (
    <ul className={`${bgColor} pt-4 ${animation.slideDown}`}>
      {dropdownItems.map((item, i) => {
        return (
          <li key={i} className={'hover:cursor-pointe px-16 my-3  w-full'}>
            <Link className={`block ${textColor}`} href={item.href}>
              {item.title}
            </Link>
          </li>
        );
      })}
      {logout && (
        <li
          className="flex items-center py-4 px-16 justify-between bg-white/50 hover:cursor-pointer"
          onClick={logoutHandler}
        >
          <AiOutlineLogout />
          <button>Logout</button>
        </li>
      )}
    </ul>
  );
};
