import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/userNavbar/topNavbar";
import SideNavBar from "../components/sideNavBar/sideNavBar";
// import Profile from "./profile";
// import Orders from "./orders";

const User = () => {
  const [sideNav, setSideNav] = useState(true);
  const responsiveSideBar = () => setSideNav(!sideNav);

  return (
    <div className="bg-custom-bg w-full h-auto flex ">
      <SideNavBar handleNav={responsiveSideBar} sideNav={sideNav} />
      <div className="user-section w-full h-auto lg:ml-60">
        <TopNavbar handleNav={responsiveSideBar} />

        <Outlet />
      </div>
    </div>
  );
};

export default User;
