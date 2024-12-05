import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import ThemeContext from "../theme/ThemeContext"; // import your ThemeContext
import CartProvider from "../providers/CartProvider";

const MainLayout = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state from the context

  return (
    <CartProvider>
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
      <Navbar />
      <Outlet /> {/* This renders the nested route components */}
      <ToastContainer />
    </div>
    </CartProvider>
  );
};

export default MainLayout;
