import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ts_logo_icon.png";

const sideNavBar = () => {
  return (
    <div className="sideNavContainer w-80 bg-white z-20 drop-shadow-md flex flex-col items-center justify-between ">
      <Link to="/" className="logo flex mt-6 mb-5">
        <img src={logo} alt="Logo" className="!w-8 !h-8" />
        <span className="md:block  hidden text-3xl font-medium">
          Tech Store
        </span>
      </Link>
      <hr className="w-full" />
      <ul className="nat w-full h-full flex flex-col items-center pt-16">
        <Link to="/user" className="w-full mb-5">
          <li className="text-center">
            {" "}
            <i className="fa-regular fa-user mr-2 text-lg"></i>Profile
          </li>
        </Link>
        <Link to="order" className="w-full mb-5">
          <li className="text-center">
            <i className="fa-solid fa-cart-arrow-down mr-2 text-lg"></i>Orders
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
