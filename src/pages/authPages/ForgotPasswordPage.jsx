import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ForgotPassword = () => {
  const { previousPath } = useSelector((state) => state.app);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white border border-transparent shadow-xl rounded-lg p-6 w-full max-w-lg">
        <div className="w-fit mx-auto">
          <h3 className="text-center text-2xl pb-1">Forgot Your Password?</h3>
          <p className="text-sm text-gray-500">
            Enter your email and we'll send you a reset link
          </p>
        </div>
        <form className="pt-8">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2.5 mb-7 border border-gray-500 rounded-[4px] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-800 text-white capitalize py-2.5 mb-5 rounded-[4px] hover:bg-red-900"
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
      </div>
    </div>
  );
};

export default ForgotPassword;
