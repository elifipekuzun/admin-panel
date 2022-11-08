import React, { useState } from 'react';
import { Sidebar } from './sidebar';
import { Navbar } from './navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
  return (
    <div className="flex">
      {mobileNavBarVisible && (
        <div
          className="w-screen h-screen absolute top-0 left-0 bg-black/40"
          onClick={() => setMobileNavBarVisible(false)}
        ></div>
      )}
      <Sidebar mobileNavBarVisible={mobileNavBarVisible} />
      <div className="w-full">
        <header className="mt-4">
          <Navbar onToggleButtonClick={() => setMobileNavBarVisible(true)} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};
