import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../images/ts_logo_icon.png";

const Signup = () => {
  const [formValues, setFormValues] = useState(null);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };
  return (
    <div className="signup-container !h-screen flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg h-auto w-full md:w-3/4 lg:w-2/5 flex flex-col justify-center items-center py-4">
        <div className="header flex w-3/5 my-8 justify-center">
          <img src={logo} alt="" className="w-8 h-8" />
          <span className="text-3xl font-medium">Tech Store</span>
        </div>
        <form className="w-4/5" onSubmit={handleSubmit}>
          <div className="names flex gap-3">
            <div className="input-wrap-name flex flex-col mb-4">
              <label htmlFor="firstName" className="mb-2">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                className="h-10 px-3 rounded-md border-2 border-zinc-400"
              />
            </div>
            <div className="input-wrap-name flex flex-col mb-4">
              <label htmlFor="lastName" className="mb-2">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="h-10 px-3 rounded-md border-2 border-zinc-400"
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
          <div className="redirect flex text-sm w-full justify-end">
            <p className="mr-1">Already have an account?</p>
            <span>
              <Link
                to="/login.user"
                className="underline-offset-2 underline text-primary"
              >
                Login
              </Link>
            </span>
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
