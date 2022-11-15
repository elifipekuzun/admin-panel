import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Searchbar } from '../searchbar';
import { DropdownMenu } from '../dropdown-menu';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import classes from './navbar.module.css';

interface DropdownProps {
  href: string;
  title: string;
}

export const Navbar: React.FC<{
  onToggleButtonClick: () => void;
  adminName: string;
}> = ({ onToggleButtonClick, adminName }) => {
  let adminDropdown: DropdownProps[] = [
    { href: '/admin/profile', title: 'View Profile' },
    { href: '/admin/edit-profile', title: 'Edit Profile' },
  ];
  const getWindowDimensions = () => {
    if (window) {
      const { innerWidth: width } = window;
      return {
        width,
      };
    }
  };
  const [adminDropDownVisible, setAdminDropdownVisible] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState<{ width: number }>();
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (window) {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (
    windowDimensions &&
    windowDimensions.width < 768 &&
    adminDropdown.length < 5
  ) {
    adminDropdown = [
      { href: '/admin/notifications', title: 'Notifications' },
      { href: '/admin/settings', title: 'Settings' },
      ...adminDropdown,
    ];
  }

  return (
    <section className="flex px-3 pb-3 items-center justify-between">
      <button className={classes.toggleButton} onClick={onToggleButtonClick}>
        <span className={classes.toggleButtonBar}></span>
        <span className={classes.toggleButtonBar}></span>
        <span className={classes.toggleButtonBar}></span>
      </button>

      <Searchbar />
      <h3 className={`text-xl ${classes.pageTitle}`}>
        <a href="/admin">Dashboard</a>
      </h3>
      <div className="flex items-center">
        <div className="mr-6">
          <div
            onClick={() => setAdminDropdownVisible(!adminDropDownVisible)}
            className="flex items-center hover:cursor-pointer "
          >
            <span className="mx-1">{adminName}</span>
            {adminDropDownVisible ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </div>
          {adminDropDownVisible && (
            <div className="absolute z-10 right-10 bg-black-500 shadow-lg shadow-black/50">
              <DropdownMenu
                logout
                textColor="text-gray-700"
                bgColor="bg-neutral-200"
                dropdownItems={adminDropdown}
              />
            </div>
          )}
        </div>
        <Link href={'/admin/notifications'} className={classes.notifications}>
          <div className="flex relative mr-6">
            <IoNotificationsOutline size={24} />
            <span className="bg-red-600 rounded-xl px-1.5 py-0.5  absolute text-xs text-white left-4 bottom-2">
              0
            </span>
          </div>
        </Link>

        <Link href={'/admin/edit-profile'} className={classes.settings}>
          <IoSettingsOutline size={24} className="mr-6" />
        </Link>
      </div>
    </section>
  );
};
