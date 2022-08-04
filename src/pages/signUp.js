import React from "react";
import "./index.css";
import logo from "../images/ts_logo_icon.png";

const Signup = () => {
  return (
    <div className="signup-container !h-screen flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg h-auto w-2/5 flex flex-col justify-center items-center py-4">
        <div className="header flex w-3/5 my-8 justify-center">
          <img src={logo} alt="" className="w-8 h-8" />
          <span className="text-3xl font-medium">Tech Store</span>
        </div>
        <form className="w-4/5">
          <div className="names flex gap-3">
            <div className="input-wrap-name flex flex-col mb-4">
              <label htmlFor="firstName" className="mb-2">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                className="h-10 px-3 rounded-md border-2 border-zinc-200"
              />
            </div>
            <div className="input-wrap-name flex flex-col mb-4">
              <label htmlFor="lastName" className="mb-2">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="h-10 px-3 rounded-md border-2 border-zinc-200"
              />
            </div>
          </div>

          <div className="input-wrap flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="h-10 px-3 rounded-md border-2 border-zinc-200"
            />
          </div>
          <div className="input-wrap flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="h-10 px-3 rounded-md border-2 border-zinc-200"
            />
          </div>
          <button
            type="submit"
            className="bg-primary w-full flex items-center justify-center rounded-md h-10 text-white my-8"
          >
            <i className="fa-solid fa-user mr-3"></i>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
