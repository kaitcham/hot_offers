import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className="login pt-20 border pl-[450px] pt-[80px] pb-[100px]">
        <div className="w-full max-w-sm px-4 py-4 bg-white border border-gray-400 item-center rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl pt-5 text-center font-medium text-gray-900 dark:text-white">
              Login
            </h5>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start"></div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
              you dont have an account?{" "}
              <Link
                to="/signup"
                className="text-red-700 hover:underline dark:text-blue-500"
              >
                Sign up
              </Link>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
              Forgot Password?{" "}
              <Link
                to="/resetPassword"
                className="text-red-700 hover:underline dark:text-blue-500"
              >
                Reset
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
