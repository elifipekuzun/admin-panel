import React, { useState, useEffect } from 'react';
import { ICategory } from '../../lib/types';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { CategoryFilter } from './category-filter';
import { PaginationBar } from '../pagination-bar';
import { ActionModal } from '../action-modal';

export const CategoryList: React.FC<{ categories: ICategory[] }> = ({
  categories,
}) => {
  const router = useRouter();
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [activePage, setActivePage] = useState(1);
  const [actionModalVisible, setActionModalVisible] = useState(false);
  const [categoryForDelete, setCategoryForDelete] = useState<
    ICategory | undefined
  >();

  useEffect(() => {
    if (categories.length > 5) {
      setFilteredCategories(
        categories.filter(
          (_, i) => i >= (activePage - 1) * 5 && i < activePage * 5
        )
      );
    }
  }, [activePage, categories]);

  return (
    <>
      {actionModalVisible && (
        <ActionModal
          item={categoryForDelete}
          visible={actionModalVisible}
          onClickBackdrop={() => setActionModalVisible(false)}
          onCancel={() => setActionModalVisible(false)}
        />
      )}
      <div className="w-full">
        <CategoryFilter
          categories={categories}
          getCategoryType={(type) => {
            if (type.length === 0) {
              setFilteredCategories(categories);
            } else {
              setFilteredCategories(
                categories.filter(
                  (cat) => cat.type.toLowerCase() === type.toLowerCase()
                )
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
                      <div
                        onClick={() => {
                          setActionModalVisible(true);
                          setCategoryForDelete(cat);
                        }}
                        className="hover:cursor-pointer p-1 hover:bg-red-300 hover:h-full  hover:rounded-2xl"
                      >
                        <AiOutlineDelete size={24} />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <PaginationBar
          onClickPrevious={() => {
            if (activePage > 1) {
              setActivePage(activePage - 1);
            }
          }}
          onClickNext={() => setActivePage(activePage + 1)}
          currentPage={activePage}
          setCurrentPage={(value) => setActivePage(value)}
          items={categories}
        />
      </div>
    </>
  );
};
