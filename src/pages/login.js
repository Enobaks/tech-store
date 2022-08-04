import React from "react";
import "./index.css";
import logo from "../images/ts_logo_icon.png";

const Login = () => {
  return (
    <div className="login-container !h-screen flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg h-auto w-2/5 flex flex-col justify-center items-center py-4">
        <div className="header flex w-3/5 my-8 justify-center">
          <img src={logo} alt="" className="w-8 h-8" />
          <span className="text-3xl font-medium">Tech Store</span>
        </div>
        <form className="w-4/5">
          <div className="input-wrap flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="h-10 px-3 rounded-md border-2 border-zinc-400"
            />
          </div>
          <div className="input-wrap flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="h-10 px-3 rounded-md border-2 border-zinc-400"
            />
          </div>
          <button
            type="submit"
            className="bg-primary w-full flex items-center justify-center rounded-md h-10 text-white my-8"
          >
            <i className="fa-solid fa-unlock-keyhole mr-3"></i>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
