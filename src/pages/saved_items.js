import React from "react";
import canvas from "../images/canvas.jpg";
import SideNavBar from "../components/sideNavBar/sideNavBar";
import TopNavbar from "../components/userNavbar/topNavbar";

const SavedItems = () => {
  return (
    // <div className="bg-custom-bg w-full h-auto flex relative">
    //   <SideNavBar />
    //   <div className="user-orders w-full h-auto">
    //     <TopNavbar />

    //   </div>
    // </div>
    <div className="orders user_details w-11/12 h-auto mx-auto mt-8 bg-white rounded-md p-4 drop-shadow-md relative">
      <h1 className="text-xl mb-2">Saved Items</h1>
      <hr className="mb-4 top-2 w-full" />
      <ul className="h-auto w-full">
        <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
          <img src={canvas} alt="mouse" />
          <div className="description flex justify-between flex-col p-2 ml-4">
            <h2>SPORTS PERFORMANCE SPORT SHOES KIDS AltaRun K</h2>
            <div className="wrap">
              <span className="bg-red-500 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3 mb-1">
                Failed
              </span>
              <p>On 01-05-2021</p>
            </div>
          </div>
        </li>
        <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
          <img src={canvas} alt="mouse" />
          <div className="description flex justify-between flex-col p-2 ml-4">
            <h2>SPORTS PERFORMANCE SPORT SHOES KIDS AltaRun K</h2>
            <div className="wrap">
              <span className="bg-green-400 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                Delivered
              </span>
              <p>On 01-05-2021</p>
            </div>
          </div>
        </li>
        <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
          <img src={canvas} alt="mouse" />
          <div className="description flex justify-between flex-col p-2 ml-4">
            <h2>SPORTS PERFORMANCE SPORT SHOES KIDS AltaRun K</h2>
            <div className="wrap">
              <span className="bg-orange-400 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                Pending
              </span>
              <p>On 01-05-2021</p>
            </div>
          </div>
          <div className="action">
            <button className="">Buy Now</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SavedItems;
