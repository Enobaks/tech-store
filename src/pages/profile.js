import React from "react";
// import Button from "../components/button/button";

const profile = () => {
  return (
    <div className="user_details w-full md:w-2/3 h-auto mx-auto mt-20 bg-white rounded-md p-4 drop-shadow-md relative">
      <h1 className="text-xl mb-2">Account Overview</h1>
      <hr className="mb-4 top-2 w-full" />
      <form>
        <div className="fullname flex flex-col md:flex-row mb-6 justify-between gap-4">
          <div className="input-wrap flex flex-col w-full md:w-1/2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="rounded-md pl-4 border-2 w-full h-10 mt-4"
            />
          </div>
          <div className="input-wrap flex flex-col w-full md:w-1/2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="rounded-md pl-4 border-2 w-full h-10 mt-4"
            />
          </div>
        </div>
        <div className="input-wrap mb-6 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="mail"
            name="email"
            className="rounded-md pl-4 border-2 w-full h-10 mt-4"
          />
        </div>
        <div className="input-wrap mb-6 flex flex-col">
          <label htmlFor="phone">Phone </label>
          <input
            type="mail"
            name="phone"
            className="rounded-md pl-4 border-2 w-full h-10 mt-4"
          />
        </div>
        <div className="input-wrap mb-6 flex flex-col">
          <label htmlFor="address">Address </label>
          <input
            type="text"
            name="address"
            className="rounded-md pl-4 border-2 w-full h-10 mt-4"
          />
        </div>
        <div className="button-wrap flex items-center justify-center">
          <button className="bg-primary w-1/2  rounded-md h-10 text-white text-sm lg:text-lg px-5 hover:bg-primary-drk my-4">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default profile;
