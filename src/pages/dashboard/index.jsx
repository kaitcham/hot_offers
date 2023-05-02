import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAside } from '../../features/appSlice';
import DashboardAside from '../../components/DashboardAside';

const index = () => {
  const dispatch = useDispatch();
  const { aside } = useSelector((state) => state.app);
  const [profileImage, setProfileImage] = useState(false);

  const setAside = () => {
    dispatch(toggleAside());
  };

  const uploadProfile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  return (
    <div className=" bg-slate-200 relative flex">
      {aside && <DashboardAside />}
      <div className="bg-slate-50 flex-1 h-screen">
        <div className="bg-slate-200 flex justify-between items-center h-[70px] px-5 border-b">
          <button onClick={setAside}>
            {aside ? <BsArrowLeft size={24} /> : <FaBars size={24} />}
          </button>
          <div className="">
            <label htmlFor="profile" className="cursor-pointer">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </label>
            <input
              type="file"
              id="profile"
              name="profile"
              accept="image/*"
              className="hidden"
              onChange={uploadProfile}
            />
          </div>
        </div>
        <div className="px-5 pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;
