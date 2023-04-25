import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link, useParams, useLocation } from 'react-router-dom';

const RegionProducts = () => {
  const { region } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="bg-slate-50">
      <div className="flex justify-between items-center border-b px-10">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-[#A20000] text-2xl font-bold">
            Hot Offers
          </Link>
          <p className="flex justify-between items-center capitalize ml-5">
            {region}{' '}
            <span>
              <BiChevronDown size={20} />
            </span>
          </p>
        </div>
        <Link
          to="/login"
          state={{ previousPath: pathname }}
          className="bg-white border border-solid border-black rounded-md px-7 py-1 hover:bg-[#A20000] hover:text-white hover:border-transparent"
        >
          Login / Register
        </Link>
      </div>
      <div className="flex justify-between items-center border-b px-10">
        <ul className="flex justify-around w-full [&>li]:p-4 [&>li]:cursor-pointer [&>li:hover]:border-b-[6px] [&>li:hover]:border-black">
          <li>Motors</li>
          <li>Property for Rent</li>
          <li>Property for Sale</li>
          <li>Classifieds</li>
          <li>Mobiles & Tablets</li>
          <li>Jobs</li>
          <li>Furniture</li>
          <li>Community</li>
        </ul>
      </div>
    </div>
  );
};

export default RegionProducts;
