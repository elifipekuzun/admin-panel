import React from 'react';
import { HiOutlineUsers, HiUsers } from 'react-icons/hi';

export const DashboardUsers: React.FC = () => {
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
        Users Overview
      </h1>
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-2">
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
          <div className="p-4  w-full p-6 rounded-lg text-white dark:text-green-100 bg-teal-500">
            <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-teal-500">
              <HiOutlineUsers size={24} />
            </div>
            <div>
              <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                Total Users
              </p>
              <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
                0
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
          <div className="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-blue-500">
            <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-blue-500">
              <HiUsers size={24} />
            </div>
            <div>
              <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                Active Users
              </p>
              <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
