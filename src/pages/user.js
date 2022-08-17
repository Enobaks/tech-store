import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/userNavbar/topNavbar";
import SideNavBar from "../components/sideNavBar/sideNavBar";
// import Profile from "./profile";
// import Orders from "./orders";

const User = () => {
  return (
    <div className="bg-custom-bg w-full h-auto flex relative">
      <SideNavBar />
      <div className="user-section w-full h-auto">
        <TopNavbar />

        <Outlet />
      </div>
    </div>
  );
};

export default User;
