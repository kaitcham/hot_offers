import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsMember, setPreviousPath } from '../../features/appSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { isMember } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(setPreviousPath(state?.previousPath));
  }, [state]);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white border border-transparent shadow-xl rounded-md px-5 py-4 w-full max-w-md relative">
        <div className="absolute top-0 right-0 p-2 bg-red-900">
          <Link
            to={state?.previousPath}
            onClick={() => dispatch(setIsMember(true))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="w-fit mx-auto">
          <h3 className="text-2xl pb-1">
            {isMember ? 'Login' : 'Create Account'}
          </h3>
          <div className="bg-red-800 h-0.5 w-4/5 mx-auto" />
        </div>
        <form className="pt-8">
          <div className="flex flex-col">
            {!isMember && (
              <>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-2 mb-5 border border-gray-500 rounded-[4px] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-2 mb-5 border border-gray-500 rounded-[4px] focus:outline-none"
                  />
                </div>
                <div className="order-last">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full p-2 mb-2 border border-gray-500 rounded-[4px] focus:outline-none"
                  />
                </div>
              </>
            )}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-5 border border-gray-500 rounded-[4px] focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 mb-5 border border-gray-500 rounded-[4px] focus:outline-none"
              />
            </div>
          </div>
          {isMember ? (
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <input type="checkbox" name="remember" id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm ml-1 cursor-pointer"
                >
                  Remember me
                </label>
              </span>
              <Link to="/forgotPassword" className="text-sm text-red-800">
                Forgot Password?
              </Link>
            </div>
          ) : (
            <p className="text-xs text-gray-400">
              Password must be atleast 8 characters
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 text-white py-2 rounded-[4px] mt-6"
          >
            {isMember ? 'Sign In' : 'Sign Up'}
          </button>
          <div className="flex justify-center items-center mt-6">
            <span className="text-sm">
              {isMember ? "Don't have an account?" : 'Already have an account?'}
            </span>
            <button
              type="button"
              className="text-sm text-red-800 ml-3"
              onClick={() => dispatch(setIsMember())}
            >
              {isMember ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
