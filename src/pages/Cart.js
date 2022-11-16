import React from "react";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/button";
import CartItem from "../components/cartItem/CartItem";

const Cart = () => {
  return (
    <div className="cart-wrap">
      <Navbar />
      <div className="orders user_details w-11/12 h-auto mx-auto mt-8 bg-white rounded-md p-4 drop-shadow-md flex flex-col lg:flex-row justify-around relative">
        <div className="cart-items">
          <h1 className="text-xl mb-2">Shopping Cart</h1>
          <hr className="mb-4 top-2 w-full" />
          <ul className="h-auto w-full">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        </div>
        <div className="cart-items-price border border-form-ash w-full lg:w-2/6 h-3/5 p-4">
          <h1>Subtotal (0) items</h1>
          <p>$499.99</p>
          <div className="check-out-wrap">
            <hr />
            <Button text={"Proceed to Checkout"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
