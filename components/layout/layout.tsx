import React, { useState, useEffect } from 'react';
import { Sidebar } from './sidebar';
import { Navbar } from './navbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ActivityIndicator } from '../activity-indicator';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/');
    }
  }, [status]);

  if (status === 'loading') {
    return <ActivityIndicator />;
  }

  return (
    <div className="flex relative">
      {mobileNavBarVisible && (
        <div
          className="w-full h-full absolute top-0 left-0 bg-black/40 z-20"
          onClick={() => setMobileNavBarVisible(false)}
        ></div>
      )}
      <Sidebar
        mobileNavBarVisible={mobileNavBarVisible}
        adminName={data?.user?.name!}
      />
      <div className="w-full bg-gray-100">
        <header className="mt-4">
          <Navbar
            adminName={data?.user?.name!}
            onToggleButtonClick={() => setMobileNavBarVisible(true)}
          />
        </header>
        <main className="">{children}</main>
      </div>
    </div>
  );
};
