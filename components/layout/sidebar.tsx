import React from 'react';
import { NavigationbarList } from './navigationbar-list';
import { MobileSidebar } from './mobile-sidebar';
import classes from './sidebar.module.css';

export const Sidebar: React.FC<{
  mobileNavBarVisible: boolean;
  adminName: string;
}> = ({ mobileNavBarVisible, adminName }) => {
  return (
    <section className="min-h-screen">
      <MobileSidebar mobileNavBarVisible={mobileNavBarVisible} />
      <nav className={`py-8 bg-slate-700 h-full ${classes.mainNavBar}`}>
        <div className=" text-white text-center mb-8 font-bold text-lg">
          {adminName}
        </div>
        <NavigationbarList />
      </nav>
    </section>
  );
};
