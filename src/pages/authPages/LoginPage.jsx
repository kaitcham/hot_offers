import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createMember } from '../../features/auth/authSlice';
import { setIsMember, setPreviousPath } from '../../features/appSlice';
import LoadingSpinner from '../../utils/LoadingSpinner';
import AuthForms from '../../components/AuthForms';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { isMember } = useSelector((state) => state.app);
  const { status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setPreviousPath(state?.previousPath));
  }, [state]);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div
        className={` ${
          status === 'loading' && 'flex justify-center items-center'
        } bg-white border border-transparent shadow-xl rounded-md px-5 py-4 w-full max-w-md relative`}
      >
        {status === 'loading' ? (
          <LoadingSpinner />
        ) : (
          <>
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
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
