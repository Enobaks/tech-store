import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
// import { UilShoppingCart } from "@iconscout/react-unicons";
// import { UilUser } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import logo from "../../images/ts_logo_icon.png";

const TopNavbar = ({ handleNav }) => {
  const [top, setTop] = useState(true);
  const handleSearchBar = () => setTop(!top);
  return (
    <div className="nav_container bg-white w-full h-20 drop-shadow-sm relative">
      <div className="nav-wrap flex flex-row justify-between items-center w-11/12 h-full p-3.5 m-auto">
        <div className="brand">
          <Link to="/" className="flex">
            <img src={logo} alt="Tech Store logo" className="!w-8 !h-8" />
            <span className="lg:block  hidden text-2xl font-medium">
              Tech Store
            </span>
          </Link>
        </div>
        <div className="menu-bar hidden" onClick={handleNav}>
          <i class="fa-solid fa-bars text-lg"></i>
        </div>
        <div className="nat flex justify-between md:w-4/5 w-9/12 lg:w-9/12">
          <div className="search-icon md:hidden">
            <Unicons.UilSearch onClick={handleSearchBar} />
            {/* <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleSearchBar}
            ></i> */}
          </div>
          <form
            className={`form-wrap flex absolute top-0 left-0 bg-slate-400 duration-300 w-full items-center justify-around ${
              top ? "h-0" : "h-20 z-20"
            }`}
          >
            <input
              type="text"
              className={`${
                top ? "hidden" : "block"
              } h-9 lg:h-10 px-3 rounded-md border-2 mr-2 text-black w-9/12`}
              placeholder="Type to search..."
            />

            <i
              class={`${
                top ? "hidden" : "block"
              } fa-solid fa-xmark text-2xl text-red-600`}
              onClick={handleSearchBar}
            ></i>
          </form>
          <div className="hidden md:block search-wrap w-3/5 relative">
            <form className="  form-wrap md:flex">
              <i className="fa-solid fa-magnifying-glass absolute top-2 lg:top-3 left-3 text-placeholder-txt"></i>
              <input
                type="text"
                className="h-8 lg:h-10 px-3 rounded-md border border-form-ash mr-2 text-black w-11/12 pl-10 "
                placeholder="Search on Tech Store"
              />
              <button className="bg-primary w-20 flex items-center justify-center rounded-md h-8 lg:h-9 text-white text-sm lg:text-lg px-1 lg:px-5 hover:bg-primary-drk">
                Search
              </button>
            </form>
          </div>

          <Link to="/user" className="profile flex items-center">
            <Unicons.UilUser />
            <span className="hidden lg:inline-block ml-3">John Doe</span>
          </Link>

          <Link to="/cart" className="flex relative items-center">
            <Unicons.UilShoppingCart />
            <span className="flex bg-red-500 w-4 h-4 text-xs rounded-xl text-white justify-center absolute left-4 lg:left-3 top-0 lg:top-1">
              2
            </span>
            <span className="text-xl hidden lg:inline-block ml-3">Cart</span>
          </Link>

          <Link to="/" className="flex items-center">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
