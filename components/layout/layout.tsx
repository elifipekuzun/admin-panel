import React, { useState, useEffect } from 'react';
import { Sidebar } from './sidebar';
import { Navbar } from './navbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ActivityIndicator } from '../activity-indicator';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
  const { status } = useSession();
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
    <div className="flex h-full w-full">
      {mobileNavBarVisible && (
        <div
          className="w-screen absolute top-0 left-0 bg-black/40"
          onClick={() => setMobileNavBarVisible(false)}
        ></div>
      )}
      <Sidebar mobileNavBarVisible={mobileNavBarVisible} />
      <div className="w-full">
        <header className="mt-4">
          <Navbar onToggleButtonClick={() => setMobileNavBarVisible(true)} />
        </header>
        <main className="bg-gray-100">{children}</main>
      </div>
    </div>
  );
};
