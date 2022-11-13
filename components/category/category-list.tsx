import React from 'react';
import { ICategory } from '../../lib/types';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export const CategoryList: React.FC<{ categories: ICategory[] }> = ({
  categories,
}) => {
  return (
    <table className="border-collapse table-auto w-full text-sm ">
      <thead>
        <tr>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Title
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Image
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Type
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Child Categories
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {categories &&
          categories.map((cat, i) => {
            return (
              <tr key={i} className="hover:bg-slate-300 hover:cursor-pointer">
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  {cat.title}
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <img
                    className="object-cover rounded-full"
                    width={24}
                    height={24}
                    src={cat.image}
                  />
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  {cat.type}
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  {cat.childTags && cat.childTags.length}
                </td>
                <td className="flex border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <AiOutlineEdit size={24} className="hover:cursor-pointer" />
                  <AiOutlineDelete
                    size={24}
                    className="ml-3 hover:cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
