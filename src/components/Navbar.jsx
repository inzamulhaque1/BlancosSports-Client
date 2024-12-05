import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-bs.png";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Track theme state
  const { user, signOutUser } = useContext(AuthContext);

  // Apply theme when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSignOut = async () => {
    await signOutUser();
  };

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
          to="/myproduct"
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
    <nav className="bg-white border-b border-[#ff6500] dark:bg-gray-900 w-full top-0 z-10">
      <div className="md:w-9/12 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[100px]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-[70px]" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">{links}</ul>

          {/* Profile Avatar */}
          {user && (
            <div className="relative group ml-20">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Tooltip */}
              {user.displayName && (
                <span className="absolute left-1/2 transform -translate-x-1/2 top-16 text-sm text-white bg-gray-800 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName}
                </span>
              )}
            </div>
          )}

          {/* Login/SignUp Button */}
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-white bg-[#ff6500] hover:bg-teal-500 font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white bg-[#ff6500] hover:bg-teal-500 font-medium rounded-lg text-sm px-4 py-2"
            >
              Login
            </Link>
          )}

          {/* Dark/Light Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)} // Toggle theme
            className="text-lg text-[#ff6500] dark:text-[#ff6500] ml-4"
          >
            {isDarkMode ? <span>🌙</span> : <span>🌞</span>}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-orange-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path
              fillRule="evenodd"
              d="M1 3.5C1 2.67157 1.67157 2 2.5 2H14.5C15.3284 2 16 2.67157 16 3.5C16 4.32843 15.3284 5 14.5 5H2.5C1.67157 5 1 4.32843 1 3.5ZM1 10.5C1 9.67157 1.67157 9 2.5 9H14.5C15.3284 9 16 9.67157 16 10.5C16 11.3284 15.3284 12 14.5 12H2.5C1.67157 12 1 11.32843 1 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 bg-gray-100">
            {links}
            <li>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-white bg-[#ff6500] hover:bg-teal-500 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-[#ff6500] hover:bg-teal-500 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
