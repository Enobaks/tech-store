import React from "react";
import TopNavbar from "../components/userNavbar/topNavbar";
import SideNavBar from "../components/sideNavBar/sideNavBar";
import mouse from "../images/mouse.jpg";

const Orders = () => {
  return (
    <div className="bg-custom-bg w-full h-screen flex relative">
      <SideNavBar />
      <div className="user-orders w-full h-auto">
        <TopNavbar />
        <div className="orders user_details w-2/3 h-auto mx-auto mt-8 bg-white rounded-md p-4 drop-shadow-md relative">
          <h1 className="text-xl mb-2">Account Overview</h1>
          <hr className="mb-4 top-2 w-full" />
          <ul className="h-auto w-full">
            <li className="ordered-items flex">
              <img src={mouse} alt="mouse" />
              <div className="description flex justify-between flex-col p-2">
                <h2>
                  2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse
                </h2>
                <span className="bg-red-500 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                  Failed
                </span>
              </div>
            </li>
            <li className="ordered-items flex">
              <img src={mouse} alt="mouse" />
              <div className="description flex justify-between flex-col p-2">
                <h2>
                  2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse
                </h2>
                <span className="bg-green-400 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                  Delivered
                </span>
              </div>
            </li>
            <li className="ordered-items flex">
              <img src={mouse} alt="mouse" />
              <div className="description flex justify-between flex-col p-2">
                <h2>
                  2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse
                </h2>
                <span className="bg-orange-400 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                  Pending
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
