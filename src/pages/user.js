import React from "react";
import TopNavbar from "../components/userNavbar/topNavbar";
import SideNavBar from "../components/sideNavBar/sideNavBar";

const User = () => {
  return (
    <div className="bg-custom-bg w-full h-screen flex">
      <SideNavBar />
      <div className="user-section w-full h-auto bg-red-300">
        <TopNavbar />
      </div>
    </div>
  );
};

export default User;
