import React, { useState } from 'react';
import logo from '../assets/logo.png';
import links from '../utils/DashboardLinks';
import { Link, NavLink } from 'react-router-dom';

const DashboardAside = () => {
  const [role] = useState('admin');

  return (
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
  );
};

export default DashboardAside;
