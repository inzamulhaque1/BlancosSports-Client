import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"; // Import the ThemeContext

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="bg-lime-300 text-white px-4 py-2 rounded-md"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;
