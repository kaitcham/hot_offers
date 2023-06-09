import { Fragment } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { signoutMember } from '../features/auth/authSlice.jsx';
import customBaseUrl from '../utils/axios.jsx';
import { removeUserFromLocalStorage } from '../utils/localStorage.jsx';

const settingsLinks = [{ id: 1, name: 'Profile', href: '#' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signoutMember());
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await customBaseUrl.delete('/delete-account');
      if (response.status === 200) {
        removeUserFromLocalStorage();
        navigate('/login');
        toast.success('Account deleted successfully');
      }
    } catch (error) {
      toast.error('Error deleting account');
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="w-full flex items-center justify-center p-1 hover:bg-gray-300">
        <Cog6ToothIcon className="h-7 w-7 text-gray-600 hover:text-gray-700" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {settingsLinks.map((link) => (
              <Menu.Item key={link.id}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {link.name}
                  </a>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  type="button"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleDeleteAccount}
                  type="button"
                  className={classNames(
                    active ? 'bg-red-700 text-white' : 'text-red-800',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  Delete Account
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
