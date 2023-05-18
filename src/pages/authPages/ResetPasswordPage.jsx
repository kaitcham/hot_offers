import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

const resetPassword = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    }
    try {
      const res = await axios.post(
        'https://hotoffers-backend-production.up.railway.app/api/change_password',
        {
          token: `${token}`,
          password1: password,
          password2: confirmPassword,
        }
      );
      if (res.status === 200) {
        window.location.href = '/login';
        toast.success('Password reset successful');
      }
    } catch (error) {
      toast.error(error.response.data.detail);
    }
  };

  useEffect(() => {
    setToken(window.location.href.split('=').pop());
    console.log(token);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm px-4 py-4 bg-white border border-gray-400 item-center rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl pt-5 text-center font-medium text-gray-900 dark:text-white">
            Reset New Password
          </h5>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Confirm password"
              className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start"></div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default resetPassword;
