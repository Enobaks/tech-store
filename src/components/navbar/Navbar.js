import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ts_logo_icon.png";
import hamburger from "../../images/menu-bar.png";
import cancel from "../../images/cancel.png";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <>
      <div className="nav-wrap container flex flex-col lg:flex-row justify-between w-11/12 p-3.5 m-auto">
        <div className="responsive-nav w-full flex justify-between">
          <div className="brand">
            <Link to="/" className="flex">
              <img src={logo} alt="Tech Store logo" className="!w-8 !h-8" />
              <span className="md:block  hidden text-3xl font-medium">
                Tech Store
              </span>
            </Link>
          </div>
          <button onClick={handleClick} className="lg:hidden w-11 h-11">
            <img src={!display ? hamburger : cancel} alt="icons" />
          </button>
        </div>
        <ul className="nav-link hidden lg:flex w-1/4  justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="/signup.user">Sign up</Link>
          </li>
          <li>
            <Link to="/login.user">Login</Link>
          </li>
        </ul>
        <ul
          className={
            display
              ? "nav-link p-3 bg-gray-500 rounded-lg lg:flex flex-col  items-center"
              : "hidden"
          }
        >
          <li className="mb-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-1">
            <Link to="#">About</Link>
          </li>
          <li className="mb-1">
            <Link to="/signup.user">Sign up</Link>
          </li>
          <li className="mb-1">
            <Link to="/login.user">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
