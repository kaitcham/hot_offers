import React from 'react';
import logo from '../assets/logo.png';
import regions from '../utils/Regions';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.jpg';

const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-8 py-3.5">
        <img src={logo} alt="logo" />
        <p>English</p>
      </div>
      <div className="relative w-full">
        <div className="relative">
          <img src={heroImage} alt="heroImage" className=" w-full h-[405px]" />
          <div className="bg-[#a2000078] absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
            <h3 className="text-slate-50 text-5xl mb-4 -translate-y-12">
              Welcome to the Rwanda #1 <br />
              <span className="text-4xl">online classifieds website!</span>
            </h3>
            <p className=" text-white text-xl">
              Which part of Rwanda would you like to explore?
            </p>
          </div>
        </div>
        <div className="mx-28 grid grid-cols-5 gap-6 -translate-y-20">
          {regions.map((region) => {
            const { id, regionName } = region;
            return (
              <Link
                key={id}
                to={`/regions/${regionName}`}
                className="bg-white text-center text-lg capitalize py-12 border rounded-lg"
              >
                <span>Hot offers</span>
                <br />
                <span>{regionName}</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <div>Links</div>
      <div>Footer</div> */}
    </div>
  );
};

export default LandingPage;
