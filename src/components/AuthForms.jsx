import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AuthForms = ({
  error,
  dispatch,
  isMember,
  createMember,
  setIsMember,
}) => {
  const [loginData, setLoginData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginMember = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error('Please fill all the fields');
      return;
    }
    console.log(email, password);
  };

  const handleCreateMember = () => {
    const { password, confirmPassword } = loginData;
    if (!Object.values(loginData).every((item) => item)) {
      toast.error('Please fill all the fields');
      return;
    }
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    dispatch(createMember(loginData));
    console.log(loginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isMember ? handleLoginMember() : handleCreateMember();
    console.log(loginData);
  };

  return (
    <form className="pt-8" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        {!isMember && (
          <>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={loginData.firstName}
                onChange={handleChange}
                className="w-full p-2 mb-5 border border-gray-500 rounded-[4px] focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={loginData.lastName}
                onChange={handleChange}
                className="w-full p-2 mb-5 border border-gray-500 rounded-[4px] focus:outline-none"
              />
            </div>
            <div className="order-last mb-2">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={loginData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-500 rounded-[4px] focus:outline-none"
              />
            </div>
          </>
        )}
        <div className={`${!error?.email ? 'mb-5' : 'mb-1'}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            className={`${
              error && isMember ? 'mb-5' : ''
            } w-full p-2 border border-gray-500 rounded-[4px] focus:outline-none`}
          />
          {error && !isMember && (
            <span className="text-xs text-red-700">{error.email}</span>
          )}
        </div>
        <div className={`${!error?.password1 ? 'mb-5' : 'mb-1'} `}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            className={`${
              error && isMember ? 'mb-3' : ''
            } w-full p-2 border border-gray-500 rounded-[4px] focus:outline-none`}
          />
          {error && !isMember && (
            <span className="text-xs text-red-700">{error.password1}</span>
          )}
        </div>
      </div>
      {isMember ? (
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-sm ml-1 cursor-pointer">
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
  );
};

export default AuthForms;
