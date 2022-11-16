import React from "react";

const button = ({ text }) => {
  return (
    <button className="bg-primary w-full  rounded-md h-8 lg:h-10 text-white text-sm lg:text-base px-5 hover:bg-primary-drk my-4">
      {text}
    </button>
  );
};

export default button;
