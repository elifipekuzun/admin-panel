import React, { useState } from 'react';
import { PaginationBar } from '../pagination-bar';
import { CgDetailsMore } from 'react-icons/cg';

export const OrderList: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div>
      <table className="border-collapse table-auto text-sm w-full ">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Time
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Shipping Address
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Method
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Phone
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Status
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-slate-300 hover:cursor-pointer">
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
            <td className="flex border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              <CgDetailsMore size={24} />
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationBar
        items={[]}
        currentPage={activePage}
        setCurrentPage={(value) => setActivePage(value)}
        onClickPrevious={() => {
          if (activePage > 1) {
            setActivePage(activePage - 1);
          }
        }}
        onClickNext={() => setActivePage(activePage + 1)}
      />
    </div>
  );
};
