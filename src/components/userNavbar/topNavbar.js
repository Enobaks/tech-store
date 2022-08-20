import React from "react";

const topNavbar = () => {
  return (
    <div className="nav_container bg-white w-full h-20 drop-shadow-sm">
      <div className="nav-wrap flex flex-row justify-between items-center w-11/12 h-full p-3.5 m-auto">
        <div className="menu-bar">
          <i class="fa-solid fa-bars text-lg"></i>
        </div>
        <div className="nat flex justify-between w-9/12 md:w-2/5">
          <div className="search-icon lg:hidden">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="hidden lg:block search-wrap w-1/2 relative">
            <form className=" hidden form-wrap lg:flex">
              <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-placeholder-txt"></i>
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
            <span className="hidden md:inline-block">Hi, John Doe</span>
          </div>
          <div>
            <i class="fa-solid fa-cart-shopping text-lg mr-2"></i>
            <span className="text-xl hidden md:inline-block">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topNavbar;
