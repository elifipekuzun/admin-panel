import React from 'react';
import { NavigationbarList } from './navigationbar-list';

import classes from './mobile-sidebar.module.css';

export const MobileSidebar: React.FC<{ mobileNavBarVisible: boolean }> = ({
  mobileNavBarVisible,
}) => {
  return (
    <>
      {mobileNavBarVisible && (
        <nav
          className={`py-8  bg-slate-700 h-screen absolute top-0 left-0 ${classes.mobileSidebar}`}
        >
          <NavigationbarList />
        </nav>
      )}
    </>
  );
};
