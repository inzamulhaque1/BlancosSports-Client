import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-bs.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-[#ff6500] text-[#ff6500] font-medium"
              : "text-blue-600 hover:text-indigo-500 font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-[#ff6500] text-[#ff6500] font-medium"
              : "text-teal-500 hover:text-indigo-500 font-medium"
          }
        >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-[#ff6500] text-[#ff6500] font-medium"
              : "text-teal-500 hover:text-indigo-500 font-medium"
          }
        >
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/a"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-[#ff6500] text-[#ff6500] font-medium"
              : "text-teal-500 hover:text-indigo-500 font-medium"
          }
        >
          My Equipment List
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white border-b border-[#ff6500] dark:bg-gray-900  w-full top-0 z-10  ">

      <div className="md:w-9/12 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[100px]">

        {/* Logo */}
        <NavLink to="/" className="flex items-center ">
          <img src={logo} alt="Flowbite Logo" className="h-[70px]" />
          <span className="ml-2 text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </NavLink>

        {/* Desktop Links */}

        <div className="hidden md:flex items-center space-x-8 ">
          <ul className="flex space-x-8 ">{links}</ul>

          <div className="avatar ">
            <div className="w-14 ml-20 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-[#ff6500] hover:bg-teal-500  font-medium rounded-lg text-sm px-4 py-2 "
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-orange-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 dark:bg-gray-800 border-t border-gray-200`}
      >
        <ul className="space-y-4 p-4">{links}</ul>
        <button
          type="button"
          className="w-full text-center mb-2 text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
