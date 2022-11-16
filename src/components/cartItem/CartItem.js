import React from "react";
import mouse from "../../images/mouse.jpg";
import * as Unicons from "@iconscout/react-unicons";

const CartItem = () => {
  return (
    <div>
      <li className="ordered-items flex border border-custom-bg rounded-md mb-4">
        <img src={mouse} alt="mouse" />
        <div className="description flex justify-between flex-col p-2">
          <h2>2.4GHz Optical Wireless Rechargeable Silent Gaming Mouse</h2>
          <div className="wrap">
            {/* <span className="bg-red-500 w-fit h-12 inline-block rounded-md lg:h-6 text-white text-sm  px-3 mb-1">
                    Failed
                  </span> */}
            <p className="mb-2">$499.99</p>
            <div className="cart-action flex items-center ">
              <select name="" className="w-16 p-2 mr-16">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <Unicons.UilTrash />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
