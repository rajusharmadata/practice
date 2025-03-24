import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Sync dark mode with localStorage and apply to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  // Close mobile menu on navigation
  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-2xl backdrop-blur-md ${
        isDark
          ? "bg-gray-900/90 text-white dark:bg-gray-900/90"
          : "bg-white/90 text-gray-900 dark:bg-white/90"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl sm:text-3xl font-extrabold tracking-tight no-underline transition-all duration-500 font-mono flex items-center ${
            isDark
              ? "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
              : "text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-600"
          }`}
        >
          <span className="text-indigo-500 dark:text-blue-400 mr-1">⚡</span>
          Binary<span className="text-indigo-500 dark:text-blue-400">Bandits</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`relative text-base lg:text-lg font-semibold tracking-wide leading-relaxed transition-all duration-500 ease-in-out group ${
                isDark ? "text-gray-100 hover:text-blue-400" : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              {item}
              <span
                className={`absolute bottom-[-6px] left-0 w-0 h-0.5 rounded-full transition-all duration-500 ease-in-out group-hover:w-full ${
                  isDark
                    ? "bg-gradient-to-r from-blue-400 to-purple-400"
                    : "bg-gradient-to-r from-indigo-500 to-blue-500"
                }`}
              ></span>
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all duration-300 ease-in-out ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 hover:ring-2 hover:ring-blue-400/50"
                : "bg-gray-100 hover:bg-gray-200 hover:ring-2 hover:ring-indigo-500/50"
            }`}
          >
            {isDark ? (
              <FiSun className="text-blue-400 h-5 w-5 lg:h-6 lg:w-6" />
            ) : (
              <FiMoon className="text-indigo-600 h-5 w-5 lg:h-6 lg:w-6" />
            )}
          </button>

          {/* Login / Signup Button */}
          <Link
            to="/auth"
            className={`px-5 py-2 lg:px-6 lg:py-2.5 bg-gradient-to-r ${
              isDark
                ? "from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                : "from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
            } text-white text-sm lg:text-base rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg`}
          >
            Login / Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full transition-all duration-300 ease-in-out ${
            isDark
              ? "hover:bg-gray-800 hover:ring-2 hover:ring-blue-400/50"
              : "hover:bg-gray-100 hover:ring-2 hover:ring-indigo-300/50"
            }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FiX className="h-6 w-6 lg:h-7 lg:w-7" />
          ) : (
            <FiMenu className="h-6 w-6 lg:h-7 lg:w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "bg-gray-900/95 text-white" : "bg-gray-50/95 text-gray-900"} shadow-lg`}
      >
        <div className="py-6 px-6 space-y-4">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
              className={`block py-3 px-4 text-lg font-semibold tracking-wide leading-loose rounded-lg transition-all duration-300 ease-in-out ${
                isDark
                  ? "text-gray-100 hover:bg-gray-800 hover:text-blue-400"
                  : "text-gray-800 hover:bg-gray-200 hover:text-indigo-600"
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Mobile Login / Signup Button */}
          <Link
            to="/auth"
            onClick={() => handleNavigation("/auth")}
            className={`block w-full mt-6 px-4 py-3 bg-gradient-to-r ${
              isDark
                ? "from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                : "from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
            } text-white text-lg rounded-lg text-center font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
          >
            Login / Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}