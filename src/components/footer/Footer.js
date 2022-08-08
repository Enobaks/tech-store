import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ts_logo_icon.png";
import "../../pages/index.css";

const Footer = () => {
  return (
    <div className="footer-container w-full h-96 bg-zinc-800 text-white flex flex-col justify-around">
      <div className="footer-wrap w-11/12 h-auto p-3.5 mx-auto flex flex-col md:flex-row justify-between">
        <Link to="/" className="flex mb-8">
          <img src={logo} alt="Tech Store logo" className="!w-8 !h-8" />
          <span className="md:block  hidden text-3xl font-bold">
            Tech Store
          </span>
        </Link>
        <div className="quick-links flex flex-col mb-8">
          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Terms and Condition</Link>
          <Link to="/">Dispute Resolution Policy</Link>
        </div>
        <div className="media flex flex-col mb-8">
          <form className="flex">
            <input
              type="text"
              className="h-8 lg:h-9 px-3 rounded-md border-2 mr-2 text-black w-56"
              placeholder="Enter E-mail Address here"
            />
            <button
              type="submit"
              className="bg-primary w-20 flex items-center justify-center rounded-md h-8 lg:h-9 text-white text-sm lg:text-lg"
            >
              Suscribe
            </button>
          </form>
          <div className="media-links flex justify-around mt-4">
            <i className="fa-brands fa-facebook-f text-xl"></i>
            <i className="fa-brands fa-instagram text-xl"></i>
            <i className="fa-brands fa-twitter text-xl"></i>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-center"> &copy; 2022. All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
