import React from "react";

const topNavbar = () => {
  return (
    <div className="nav_container bg-white w-full h-20 drop-shadow-sm">
      <div className="nav-wrap flex flex-row justify-between items-center w-11/12 h-full p-3.5 m-auto">
        <div className="search-wrap w-1/2 relative">
          <form className="form-wrap flex">
            <input
              type="text"
              className="h-8 lg:h-10 px-3 rounded-md border-2 mr-2 text-black w-11/12 pl-10 "
              placeholder="Type to search..."
            />
            <button className="bg-primary w-20 flex items-center justify-center rounded-md h-8 lg:h-9 text-white text-sm lg:text-lg px-5 hover:bg-primary-drk">
              Search
            </button>
            <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-placeholder-txt"></i>
          </form>
        </div>
        <div className="profile">
          <i className="fa-regular fa-user mr-2 text-lg"></i>
          <span>Hi, John Doe</span>
        </div>
        <div>
          <i class="fa-solid fa-cart-shopping text-lg mr-2"></i>
          <span className="text-xl ">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default topNavbar;
