import React from 'react';
import { BsTrash } from 'react-icons/bs';
import classes from './action-modal.module.css';

export const ActionModal: React.FC<{
  onClickBackdrop: () => void;
  onCancel: () => void;
  visible: boolean;
  item: any;
}> = ({ onClickBackdrop, visible, onCancel, item }) => {
  const deleteHandler = async () => {
    const response = await fetch('/api/auth/add', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: item._id }),
    });
    const data = await response.json();
    if (data.message === 'Success') {
      onCancel();
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen absolute top-0 left-0`}
    >
      <div
        onClick={onClickBackdrop}
        className="w-screen h-screen bg-black/50 fixed top-0 left-0 "
      ></div>
      <div
        className={`w-2/3 bg-white px-10 py-4 border absolute overflow-x-hidden ${
          visible && classes['action-modal']
        }`}
      >
        <div className="flex flex-col items-center justify-center p-4 my-4">
          <div className="mb-5">
            <BsTrash size={32} color="red" />
          </div>
          <h2 className="text-xl font-medium mb-1 text-center">
            Are you sure! Want to delete{' '}
            <span className="text-red-500">{item.title}</span>?
          </h2>
          <p className="text-center">
            Do you really want to delete these records? You can't view this in
            your list anymore if you delete!
          </p>
        </div>
        <footer className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row bg-gray-50 dark:bg-gray-800 justify-center">
          <button
            onClick={onCancel}
            type="button"
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 bg-gray-200 w-full sm:w-auto hover:bg-white hover:border-gray-50"
          >
            No, Keep it
          </button>
          <button
            onClick={deleteHandler}
            type="button"
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full sm:w-auto"
          >
            Yes, Delete it
          </button>
        </footer>
      </div>
    </div>
  );
};
