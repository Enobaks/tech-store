import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ts_logo_icon.png";

const sideNavBar = () => {
  return (
    <div className="sideNavContainer w-80 bg-orange-300">
      <Link to="/" className="logo flex">
        <img src={logo} alt="Logo" className="!w-8 !h-8" />
        <span className="md:block  hidden text-3xl font-medium">
          Tech Store
        </span>
      </Link>
    </div>
  );
};

export default sideNavBar;
