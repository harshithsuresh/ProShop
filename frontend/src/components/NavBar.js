import React from 'react';
import { BiCart, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from '../components/Dropdown';

const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-onSurface mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-lg font-bold leading-relaxed inline-block mr-4 py-2  text-primary flex flex-wrap gap-6">
              <Link className="text-2xl" to="/">
                ProShop
              </Link>

              <div className="flex gap-2">
                <BiCart className="mt-1.5" />
                <Link to="/cart"> Cart</Link>
              </div>

              <div className="flex gap-2">
                <BiUser className="mt-1.5" />
                {userInfo ? (
                  <Dropdown name={userInfo.name} />
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
