import React, { useState } from 'react';
import { ICategory } from '../../lib/types';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { CategoryFilter } from './category-filter';

export const CategoryList: React.FC<{ categories: ICategory[] }> = ({
  categories,
}) => {
  const router = useRouter();
  const [filteredCategories, setFilteredCategories] = useState(categories);
  return (
    <div className="w-full">
      <CategoryFilter
        categories={categories}
        getCategoryType={(type) => {
          if (type.length === 0) {
            setFilteredCategories(categories);
          } else {
            setFilteredCategories(
              categories.filter((cat) => cat.type === type)
            );
          }
        }}
      />
      <table className="border-collapse table-auto text-sm w-full ">
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
          {filteredCategories &&
            filteredCategories.map((cat) => {
              return (
                <tr
                  key={cat._id}
                  className="hover:bg-slate-300 hover:cursor-pointer"
                >
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {cat.title}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    <img
                      className="object-cover rounded-full"
                      width={24}
                      height={24}
                      src={'../images/' + cat.image}
                    />
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {cat.type}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {cat.tags && cat.tags.length}
                  </td>
                  <td className="flex border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    <div
                      className="hover:cursor-pointer p-1 hover:bg-green-200 hover:h-full  hover:rounded-2xl"
                      onClick={() => {
                        router.push({
                          pathname: '/admin/category/add-category',
                          query: { categoryId: cat._id },
                        });
                      }}
                    >
                      <AiOutlineEdit size={24} />
                    </div>
                    <div className="hover:cursor-pointer p-1 hover:bg-red-300 hover:h-full  hover:rounded-2xl">
                      <AiOutlineDelete size={24} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
