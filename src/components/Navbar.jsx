import { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'; // Icons for theme toggle and hamburger menu

const Navbar = () => {
    
  // State for theme (background color)
  const [theme, setTheme] = useState('dark'); // 'dark' for indigo, 'light' for white
  // State for hamburger menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Functions to switch themes
  const setLightTheme = () => {
    setTheme('light');
  };

  const setDarkTheme = () => {
    setTheme('dark');
  };

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine background and text colors based on theme
  const bgColor = theme === 'dark' ? 'bg-indigo-980' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const hoverBg = theme === 'dark' ? 'hover:bg-purple-400' : 'hover:bg-purple-200';

  return (
    <>
      {/* Navigation bar */}
      <nav
        className={`w-full p-4 border-b-2 border-gray-400 transition-colors duration-300 ${bgColor}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand/Logo */}
          <div className="main__icon">
            <h1 className={`text-2xl font-bold font-sans ${textColor}`}>Shaw</h1>
          </div>

          {/* Hamburger Menu Button (Visible on mobile) */}
          <button
            className={`md:hidden p-2 rounded-full ${textColor} hover:bg-gray-200 focus:outline-none`}
             onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          {/* Navigation Links and Theme Buttons (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="space-x-4">
              <a
                href="/"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
              >
                Home
              </a>
              <a
                href="/About"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
              >
                About
              </a>
              <a
                href="/contact"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
              >
                Contact
              </a>
              <a
                href="/service"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
              >
                Service
              </a>
              <a
                href="/Project"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
              >
                Project
              </a>
            </div>

            {/* Theme Toggle Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={setLightTheme}
                className={`p-2 rounded-full ${
                  theme === 'light' ? 'bg-gray-200' : 'hover:bg-gray-200'
                } focus:outline-none`}
                aria-label="Switch to light theme"
              >
                <FaSun className={`text-xl ${textColor}`} />
              </button>
              <button
                onClick={setDarkTheme}
                className={`p-2 rounded-full ${
                  theme === 'dark' ? 'bg-gray-600' : 'hover:bg-gray-200'
                } focus:outline-none`}
                aria-label="Switch to dark theme"
              >
                <FaMoon className={`text-xl ${textColor}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="/About"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-serif rounded-md`}
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="/contact"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="/service"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
                onClick={toggleMenu}
              >
                Service
              </a>
              <a
                href="/Project"
                className={`${textColor} ${hoverBg} px-5 py-3 transition duration-300 text-lg font-sans rounded-md`}
                onClick={toggleMenu}
              >
                Project
              </a>
              {/* Theme Toggle Buttons for Mobile */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => {
                    setLightTheme();
                    toggleMenu();
                  }}
                  className={`p-2 rounded-full ${
                    theme === 'light' ? 'bg-gray-200' : 'hover:bg-gray-200'
                  } focus:outline-none`}
                  aria-label="Switch to light theme"
                >
                  <FaSun className={`text-xl ${textColor}`} />
                </button>
                <button
                  onClick={() => {
                    setDarkTheme();
                    toggleMenu();
                  }}
                  className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-600' : 'hover:bg-gray-200'
                  } focus:outline-none`}
                  aria-label="Switch to dark theme"
                >
                  <FaMoon className={`text-xl ${textColor}`} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;