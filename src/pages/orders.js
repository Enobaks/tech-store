import React from "react";

import mouse from "../images/mouse.jpg";

const Orders = () => {
  return (
    <div className="orders user_details w-11/12 h-auto mx-auto mt-8 bg-white rounded-md p-4 drop-shadow-md relative">
      <h1 className="text-xl mb-2">Account Overview</h1>
      <hr className="mb-4 top-2 w-full" />
      <ul className="h-auto w-full">
        <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
          <img src={mouse} alt="mouse" />
          <div className="description flex justify-between flex-col p-2">
            <h2>2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse</h2>
            <div className="wrap">
              <span className="bg-red-500 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3 mb-1">
                Failed
              </span>
              <p>On 01-05-2021</p>
            </div>
          </div>
        </li>
        <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
          <img src={mouse} alt="mouse" />
          <div className="description flex justify-between flex-col p-2">
            <h2>2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse</h2>
            <div className="wrap">
              <span className="bg-green-400 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                Delivered
              </span>
              <p>On 01-05-2021</p>
            </div>
          </div>
        </li>
        <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
          <img src={mouse} alt="mouse" />
          <div className="description flex justify-between flex-col p-2">
            <h2>2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse</h2>
            <div className="wrap">
              <span className="bg-orange-400 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3">
                Pending
              </span>
              <p>On 01-05-2021</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Orders;
