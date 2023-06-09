import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createMember, loginMember } from '../../features/auth/authSlice';
import {
  setIsMember,
  setPreviousPath,
  setAccountMessage,
} from '../../features/appSlice';
import LoadingSpinner from '../../utils/LoadingSpinner';
import AuthForms from '../../components/AuthForms';
import logo from '../../assets/logo.png';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const formHeight = useRef(null);
  const { status, error, user } = useSelector((state) => state.auth);
  const { isMember, previousPath, accountMessage } = useSelector(
    (state) => state.app
  );

  const handleMessage = () => {
    dispatch(setAccountMessage());
    dispatch(setIsMember(true));
  };

  useEffect(() => {
    if (previousPath) {
      dispatch(setPreviousPath(previousPath));
    } else {
      dispatch(setPreviousPath(state?.previousPath));
    }
  }, [previousPath, state]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    } else if (accountMessage) {
      setTimeout(() => {
        handleMessage();
      }, 4000);
    }
  }, [user, accountMessage, navigate]);

  return (
    <div className="bg-gray-100 h-screen grid grid-cols-3">
      <div className="pl-8 pt-4">
        <Link
          to={previousPath || '/'}
          onClick={() => dispatch(setIsMember(true))}
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="order-1 justify-self-end pr-8 pt-4" />
      <div
        className={`bg-white relative shadow-xl rounded-md px-5 py-4 w-full max-w-md h-fit my-auto`}
      >
        {accountMessage ? (
          <div
            className="flex flex-col justify-center items-center"
            style={{ height: `${formHeight.current?.clientHeight}px` }}
          >
            <p className="text-center text-red-800 mb-10">
              Account created successfully. <br /> Please check your email to
              activate your account.
            </p>
            <Link
              to="/login"
              onClick={handleMessage}
              className="px-6 py-2 bg-red-700 rounded-md"
            >
              Okay
            </Link>
          </div>
        ) : !status || status === 'failed' ? (
          <div ref={formHeight}>
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
            <AuthForms
              error={error}
              dispatch={dispatch}
              isMember={isMember}
              setIsMember={setIsMember}
              createMember={createMember}
              loginMember={loginMember}
            />
          </div>
        ) : (
          <div
            className="flex justify-center items-center"
            style={{ height: `${formHeight.current?.clientHeight}px` }}
          >
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
