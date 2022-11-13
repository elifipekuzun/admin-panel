import React, { useState } from 'react';
import classes from './add-category-form.module.css';
import { useRouter } from 'next/router';

export const AddCategoryForm: React.FC = () => {
  const [catImage, setCatImage] = useState('');
  const [type, setType] = useState<string | undefined>();
  const [title, setTitle] = useState('');
  const [childValue, setChildValue] = useState('');
  const [childTags, setChildTags] = useState<string[]>([]);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/auth/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: catImage, title, type, childTags }),
    });
    const data = await response.json();
    if (data.message === 'Success') {
      router.push('/admin/category');
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div>
          <h4 className="text-xl font-medium">Add Category</h4>
          <p className="mb-0 text-sm">
            Add your category and necessary information from here
          </p>
        </div>
      </div>
      <div className="w-full dark:bg-gray-700 dark:text-gray-200 relative ">
        <div className="absolute overflow-scroll mr-0 mb-0 ">
          <form
            className="w-full h-full relative pb-40 md:pb-20"
            onSubmit={submitHandler}
          >
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Category Image
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <div className="w-full text-center">
                    <div className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer">
                      <input
                        accept="image/*"
                        className=""
                        type={'file'}
                        autoComplete="off"
                        tabIndex={-1}
                        value={catImage}
                        onChange={(e) => setCatImage(e.target.value)}
                      />
                      <span className="mx-auto flex justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-3xl text-green-500"
                          height={'2rem'}
                          width={'2rem'}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="16 16 12 12 8 16"></polyline>
                          <line x1={12} y1={12} x2={12} y2={21}></line>
                          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                          <polyline points="16 16 12 12 8 16"></polyline>
                        </svg>
                      </span>
                      <p className="text-sm mt-2">Drag your image here</p>
                      <em className="text-xs text-gray-400">
                        (Only *.jpeg and *.png images will be accepted)
                      </em>
                      <aside className="flex flex-row flex-wrap mt-4"></aside>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Category Type
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <select
                    name="type"
                    className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select border-gray-200 border leading-5 h-12 text-sm bg-gray-100 "
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option hidden>Select Type</option>
                    <option value={'Shoes'}>Shoes</option>
                    <option value={'Clothes'}>Clothes</option>
                    <option value={'Accessory'}>Accessory</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Category Title
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <input
                    className="block w-full px-3 py-1 text-sm focus:outline-none leading-5 rounded-md border-gray-200 dark:border-gray-600  dark:bg-gray-700 border h-12 text-sm  block w-full bg-gray-100 dark:bg-white"
                    type={'text'}
                    required
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Child Category
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <div className={`${classes['react-tag-input']}`}>
                    {childTags &&
                      childTags.map((tag, i) => {
                        return (
                          <div
                            className={`${classes['react-tag-input__tag']}`}
                            key={i}
                          >
                            <div
                              className={`${classes['react-tag-input__tag__content']}`}
                            >
                              {tag}
                            </div>
                            <div
                              onClick={() => {
                                setChildTags(
                                  childTags.filter((_, index) => index !== i)
                                );
                              }}
                              className={`${classes['react-tag-input__tag__remove']}`}
                            ></div>
                          </div>
                        );
                      })}
                    <input
                      className={`block w-full px-3 py-1 text-sm focus:outline-none leading-5 rounded-md  border-gray-200 dark:bg-gray-700 border h-12 text-sm bg-gray-100 ${classes['react-tag-input__input']}`}
                      type={'text'}
                      name="title"
                      value={childValue}
                      placeholder="Child category  (Write then press enter to add new child category)"
                      onChange={(e) => setChildValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setChildTags([...childTags, childValue]);
                          setChildValue('');
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full right-0 py-4 px-6 grid gap-4  md:flex  dark:text-gray-300">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <button
                  onClick={() => router.push('/admin/category')}
                  type="button"
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 bg-gray-200 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                >
                  Cancel
                </button>
              </div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <button
                  type="submit"
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12"
                >
                  Add Category
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
