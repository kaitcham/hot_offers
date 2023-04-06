import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import noProfileImage from '../../assets/no-profile.jpg';
import links from '../../utils/DashboardLinks';

const index = () => {
  const [aside, setAside] = useState(true);
  const [role, setRole] = useState('admin');
  const [profileImage] = useState(false);

  return (
    <div className=" bg-slate-100 relative flex">
      {aside && (
        <div className="sticky top-0 left-0 h-screen w-1/4 flex flex-col">
          <div className="h-[69px] flex justify-center items-center">
            <Link to="/dashboard">
              <img src={logo} alt="logo" className="-translate-x-2" />
            </Link>
          </div>
          <div className=" flex-1 border-r">
            <ul className="pt-10">
              {links.map((link) => {
                const { id, name, path, icon } = link;
                if (role !== 'admin' && (id === 1 || id === 2)) return null;
                return (
                  <li key={id}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? 'navLink navLinkActive' : 'navLink'
                      }
                    >
                      {icon}
                      <span className="ml-3">{name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div className="bg-slate-50 flex-1 h-screen">
        <div className="bg-slate-100 flex justify-between items-center h-[70px] px-5 border-b">
          <button onClick={() => setAside(!aside)}>
            {aside ? <BsArrowLeft size={24} /> : <FaBars size={24} />}
          </button>
          <div>
            <div className="">
              <img
                src={profileImage ? profileImage : noProfileImage}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
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
