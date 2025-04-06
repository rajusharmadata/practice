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

  // Add a subtle hover animation for menu items
  const menuItemAnimation = `transform transition-all duration-300 ease-in-out hover:translate-y-[-2px]`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-2xl backdrop-blur-md ${
        isDark
          ? "bg-gray-900/90 text-white dark:bg-gray-900/90"
          : "bg-white/90 text-gray-900 dark:bg-white/90"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
        {/* Logo with enhanced animation */}
        <Link
          to="/"
          className={`text-2xl sm:text-3xl font-extrabold tracking-tight no-underline transition-all duration-500 font-mono flex items-center ${
            isDark
              ? "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
              : "text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-600"
          } transform hover:scale-105`}
        >
          <span className="text-indigo-500 dark:text-blue-400 mr-1">⚡</span>
          Binary<span className="text-indigo-500 dark:text-blue-400">Bandits</span>
        </Link>

        {/* Desktop Menu with Work Experience added */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative text-base lg:text-lg font-semibold tracking-wide leading-relaxed transition-all duration-500 ease-in-out group ${menuItemAnimation} ${
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

          {/* Dark Mode Toggle with enhanced animation */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all duration-300 ease-in-out transform hover:rotate-12 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 hover:ring-2 hover:ring-blue-400/50"
                : "bg-gray-100 hover:bg-gray-200 hover:ring-2 hover:ring-indigo-500/50"
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <FiSun className="text-blue-400 h-5 w-5 lg:h-6 lg:w-6" />
            ) : (
              <FiMoon className="text-indigo-600 h-5 w-5 lg:h-6 lg:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button with improved animation */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full transition-all duration-300 ease-in-out transform active:scale-90 ${
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

      {/* Mobile Menu with improved animation and Work Experience added */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "bg-gray-900/95 text-white" : "bg-gray-50/95 text-gray-900"} shadow-lg`}
      >
        <div className="py-6 px-6 space-y-4">
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleNavigation(`/${item.toLowerCase().replace(/\s+/g, '-')}`)}
              className={`block py-3 px-4 text-lg font-semibold tracking-wide leading-loose rounded-lg transition-all duration-300 ease-in-out transform hover:translate-x-2 ${
                isDark
                  ? "text-gray-100 hover:bg-gray-800 hover:text-blue-400"
                  : "text-gray-800 hover:bg-gray-200 hover:text-indigo-600"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}