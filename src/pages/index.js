import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./index.css";
import gadget from "../images/gadget4.jpg";

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="hero-section relative">
        <img
          src={gadget}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="overlay absolute w-full h-full z-20 bg-dark-overlay top-0 flex flex-col items-center justify-center">
          <h1 className=" text-3xl px-5 lg:text-5xl text-white font-bold lg:w-1/2 lg:ml-20">
            Get your gadgets here at affordable prices
          </h1>
          <p className="text-white text-2xl pt-4 lg:text-3xl lg:pt-6">
            10% Off Your First Order{" "}
          </p>
          <button
            className="transition ease-in-out duration-300 rounded-md mt-4 w-24 h-10 lg:mt-6
           bg-white hover:scale-110"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="qualities flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-between items-center w-11/12 h-96 lg:h-36 p-4 mx-auto my-12">
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i class="fa-solid fa-check text-3xl mr-4"></i>
          <h5 className="text-lg">Quality Product</h5>
        </div>
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i class="fa-solid fa-truck-fast text-3xl mr-4"></i>
          <h5 className="text-lg">Fast Delivery</h5>
        </div>
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i className="text-3xl fa-solid fa-arrow-right-arrow-left mr-4"></i>
          <h5 className="text-lg">14 Days Return Policy</h5>
        </div>
        <div className="flex md:justify-center lg:w-auto lg:justify-center">
          <i className=" text-3xl fa-solid fa-phone-volume mr-4"></i>
          <h5 className="text-lg">24/7 Support</h5>
        </div>
      </div>
    </div>
  );
};

export default Landing;
