import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import customBaseUrl from '../../utils/axios';
import LoadingSpinner from '../../utils/LoadingSpinner';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const formHeight = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { previousPath } = useSelector((state) => state.app);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    customBaseUrl
      .post('forget_password', { email })
      .then((res) => {
        setLoading(false);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  }, [message]);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div
        ref={formHeight}
        className={`${
          message ? 'p-0' : ' p-6'
        } bg-white border border-transparent shadow-xl rounded-lg
        w-full max-w-lg`}
      >
        {loading && (
          <div
            className="flex justify-center items-center"
            style={{ height: `${formHeight.current?.clientHeight}px` }}
          >
            <LoadingSpinner />
          </div>
        )}
        {!loading && !message && (
          <>
            <div className="w-fit mx-auto">
              <h3 className="text-center text-2xl pb-1">
                Forgot Your Password?
              </h3>
              <p className="text-sm text-gray-500">
                Enter your email and we'll send you a reset link
              </p>
            </div>
            <form className="pt-8">
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 mb-7 border border-gray-500 rounded-[4px] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white capitalize py-2.5 mb-5 rounded-[4px] hover:bg-red-900"
                onClick={handleForgotPassword}
              >
                send reset link
              </button>
              <p className="text-center text-gray-400">
                Remember your password?{' '}
                <Link
                  to="/login"
                  state={{ previousPath }}
                  className="text-red-800 ml-4"
                >
                  Login
                </Link>
              </p>
            </form>
          </>
        )}
        {message && (
          <div
            className="relative flex justify-center items-center"
            style={{ height: `${formHeight.current?.clientHeight}px` }}
          >
            {' '}
            <div className="absolute top-0 right-0 p-2 bg-red-900">
              <button onClick={() => navigate('/login')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white font-bold"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center text-red-800">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
