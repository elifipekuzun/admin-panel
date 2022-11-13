import React from 'react';
import { ImStack } from 'react-icons/im';
import { SlBasket, SlRefresh } from 'react-icons/sl';
import { BsTruck, BsCheck2, BsCreditCard } from 'react-icons/bs';
import { DashboardUsers } from './dashboard-users';

export const DashboardOverview: React.FC = () => {
  return (
    <section>
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Dashboard Overview
        </h1>
        <div className="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
          <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
            <div className="p-4  w-full p-6 rounded-lg text-white dark:text-green-100 bg-teal-500">
              <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-teal-500">
                <ImStack size={24} />
              </div>
              <div>
                <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                  Today's Order
                </p>
                <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
                  $0
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
            <div className="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-blue-500">
              <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-blue-500">
                <SlBasket size={24} />
              </div>
              <div>
                <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                  This Month
                </p>
                <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
                  $0
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
            <div className="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-green-500">
              <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-green-500">
                <BsCreditCard size={24} />
              </div>
              <div>
                <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                  Total Order
                </p>
                <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
                  $0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 pb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full hover:cursor-pointer">
          <div className="p-4 flex items-center border border-gray-200  w-full rounded-lg">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500">
              <SlBasket size={24} />
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span>Total Order</span>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full hover:cursor-pointer">
          <div className="p-4 flex items-center border border-gray-200  w-full rounded-lg">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500">
              <SlRefresh size={24} />
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span>Order Pending</span>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full hover:cursor-pointer">
          <div className="p-4 flex items-center border border-gray-200  w-full rounded-lg">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500">
              <BsTruck size={24} />
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span>Order Processing</span>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full hover:cursor-pointer">
          <div className="p-4 flex items-center border border-gray-200  w-full rounded-lg">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500">
              <BsCheck2 size={24} />
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span>Order Delivered</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <DashboardUsers />
    </section>
  );
};
