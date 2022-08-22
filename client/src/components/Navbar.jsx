import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full text-white sticky top-0  bg-gradient-header z-30">
      <div className="px-14 flex items-center justify-between h-16">
        {/* Left Menu */}
        <div className="flex items-center">
          <img
            className="h-7 mr-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo-navbar"
            draggable="false"
          />
          <Link to="/" className="link">
            <span className="mr-10">Homepage</span>
          </Link>
          <Link to="/" className="link">
            <span className="mr-10">Series</span>
          </Link>
          <Link to="/" className="link">
            <span className="mr-10">Movies</span>
          </Link>
          <span className="mr-10">New and Popular</span>
          <span className="mr-10">My List</span>
        </div>

        {/* Right Menu */}
        <div className="flex items-center">
          <div className="cursor-pointer mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <span>KID</span>
          <div className="cursor-pointer mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <img
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="cursor-pointer mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="hidden hover:flex hover:flex-col hover:absolute bg-black rounded-md">
              <span className="p-5 cursor-pointer">Settings</span>
              <span className="p-5 cursor-pointer">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
