import React from "react";

const button = ({ text }) => {
  return (
    <button className="bg-primary w-1/2  rounded-md h-8 lg:h-10 text-white text-sm lg:text-lg px-5 hover:bg-primary-drk my-4">
      {text}
    </button>
  );
};

export default button;
