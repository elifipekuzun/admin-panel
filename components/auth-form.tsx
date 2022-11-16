import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export const AuthForm: React.FC<{ formType: string }> = ({ formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<string | null>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formType === 'login') {
      try {
        const result = await signIn('credentials', { email, password });
        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    } else {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await response.json();
      if (data.message !== 'Success') {
        setErrorMessage(data.message);
        return;
      }
    }
  };

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 my-16">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                src={'login-office.jpeg'}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  {formType === 'login' ? 'Login' : 'Create Account'}
                </h1>
                <form onSubmit={submitHandler}>
                  {formType === 'signup' && (
                    <>
                      <label
                        className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        className='class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md  border-gray-200 dark:border-gray-600 focus:ring  dark:bg-gray-700 border h-12 text-sm block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white'
                        type={'text'}
                        id="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </>
                  )}
                  <label
                    className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    className='class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md  border-gray-200 dark:border-gray-600 focus:ring  dark:bg-gray-700 border h-12 text-sm block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white'
                    type={'email'}
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {formType === 'login' && <div className="mt-6"></div>}
                  <label
                    className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    className='class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md  border-gray-200 dark:border-gray-600 focus:ring   dark:bg-gray-700 border h-12 text-sm  block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white'
                    type={'password'}
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {formType === 'signup' && (
                    <>
                      <label
                        className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm"
                        htmlFor="role"
                      >
                        Staff Role
                      </label>
                      <div className="col-span-8 sm:col-span-4">
                        <select
                          onChange={(e) => setRole(e.target.value)}
                          name="role"
                          className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring  dark:bg-gray-700 leading-5 border h-12 text-sm block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                        >
                          <option hidden>Staff Role</option>
                          <option value={'Admin'}>Admin</option>
                          <option value={'Manager'}>Manager</option>
                          <option value={'CEO'}>CEO</option>
                          <option value={'Deliver Person'}>
                            Deliver Person
                          </option>
                        </select>
                      </div>
                      <label className="block text-sm text-gray-700 dark:text-gray-400 inline-flex items-center mt-6">
                        <input
                          type={'checkbox'}
                          className="text-green-500 form-checkbox focus:outline-none focus:ring focus:ring-offset-0 rounded dark:focus:ring-gray-300 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring dark:bg-gray-700"
                          required
                        />
                        <span className="ml-2">
                          I agree to the
                          <span className="underline"> privacy policy</span>
                        </span>
                      </label>
                    </>
                  )}

                  <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-slate-700 border border-transparent active:bg-slate-900 hover:bg-slate-900 focus:ring focus:ring-purple-300 mt-4 h-12 w-full">
                    {formType === 'login' ? 'Login' : 'Create Account'}
                  </button>
                  {/* <p>
                  {loading && 'Loading...'}
                  {errorMessage && errorMessage}
                </p> */}
                  <hr className="my-10" />
                  <p className="mx-auto hover:cursor-pointer">
                    <a
                      className="text-sm font-medium text--500 dark:text-slate-700 hover:underline"
                      href={formType === 'login' ? '/signup' : '/'}
                    >
                      {formType === 'login'
                        ? 'Create an account'
                        : 'Already have an account? Login'}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
