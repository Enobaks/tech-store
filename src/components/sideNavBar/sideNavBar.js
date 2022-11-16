import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ts_logo_icon.png";
import { UilShoppingBag } from "@iconscout/react-unicons";

const sideNavBar = ({ handleNav, sideNav }) => {
  return (
    <div
      className={`block sideNavContainer fixed  ${
        !sideNav ? "w-0" : "w-56 lg:w-60"
      } h-screen  duration-300 bg-white z-20 drop-shadow-md lg:flex flex-col items-center justify-between `}
    >
      <div className="logo flex mt-6 mb-5">
        <div
          className={`logo-wrap flex justify-around items-center w-full ${
            !sideNav ? "hidden" : "block"
          }`}
        >
          <Link to="/" className="sg flex items-center">
            <img src={logo} alt="Logo" className="!w-8 !h-8" />
            <span className="md:block  hidden ml-2 md:text-lg lg:text-3xl font-medium">
              Tech Store
            </span>
          </Link>

          <i
            className="fa-solid fa-xmark lg:hidden text-2xl text-red-600 "
            onClick={handleNav}
          ></i>
        </div>
      </div>
      <hr className="w-full" />
      <ul
        className={`nat w-full h-full flex flex-col transition duration-700 items-center pt-16 ${
          !sideNav ? "hidden" : "block"
        }`}
      >
        <Link to="/user" className="w-full mb-5">
          <li className="text-center">
            {" "}
            <i className="fa-regular fa-user mr-2 text-lg"></i>Profile
          </li>
        </Link>
        <Link to="products" className="w-full mb-5">
          <li className="text-center"> Products</li>
        </Link>
        <Link to="order" className="w-full mb-5">
          <li className="flex justify-center">
            <UilShoppingBag className="mr-2" />
            Orders
          </li>
        </Link>
        <Link to="saveditem" className="w-full mb-5">
          <li className="text-center">
            <i className="fa-regular fa-heart mr-2 text-lg"></i>Saved
          </li>
        </Link>
        <Link to="/" className="w-full mb-5">
          <li className="text-center">
            <i className="fa-solid fa-right-from-bracket mr-2 text-lg"></i>
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default sideNavBar;
