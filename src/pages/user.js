import React from "react";
import TopNavbar from "../components/userNavbar/topNavbar";
import SideNavBar from "../components/sideNavBar/sideNavBar";

const User = () => {
  return (
    <div className="bg-custom-bg w-full h-auto flex relative">
      <SideNavBar />
      <div className="user-section w-full h-auto">
        <TopNavbar />
        <div className="user_details w-2/3 h-auto mx-auto mt-8 bg-white rounded-md p-4 drop-shadow-md relative">
          <h1 className="text-xl mb-2">Account Overview</h1>
          <hr className="mb-4 top-2 w-full" />
          <form>
            <div className="fullname flex mb-6 justify-between gap-4">
              <div className="input-wrap flex flex-col w-1/2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="rounded-md pl-4 border-2 w-full h-8 lg:h-10 mt-4"
                />
              </div>
              <div className="input-wrap flex flex-col w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="rounded-md pl-4 border-2 w-full h-8 lg:h-10 mt-4"
                />
              </div>
            </div>
            <div className="input-wrap mb-6 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="mail"
                name="email"
                className="rounded-md pl-4 border-2 w-full h-8 lg:h-10 mt-4"
              />
            </div>
            <div className="input-wrap mb-6 flex flex-col">
              <label htmlFor="phone">Phone </label>
              <input
                type="mail"
                name="phone"
                className="rounded-md pl-4 border-2 w-full h-8 lg:h-10 mt-4"
              />
            </div>
            <div className="input-wrap mb-6 flex flex-col">
              <label htmlFor="address">Address </label>
              <input
                type="text"
                name="address"
                className="rounded-md pl-4 border-2 w-full h-8 lg:h-10 mt-4"
              />
            </div>
            <button className="bg-primary w-full flex items-center justify-center rounded-md h-8 lg:h-10 text-white text-sm lg:text-lg px-5 hover:bg-primary-drk my-4">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
