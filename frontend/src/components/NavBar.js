import React from 'react';
import { BiCart, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-onSurface mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-lg font-bold leading-relaxed inline-block mr-4 py-2  text-primary flex flex-wrap gap-6">
              <div className="text-2xl">
                <Link to="/">ProShop</Link>
              </div>
              <div className="flex gap-2">
                <BiCart className="mt-1" />
                <Link to="/home"> Home</Link>
              </div>
              <div className="flex gap-2">
                <BiUser className="mt-1" />
                <Link to="/link">User</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
