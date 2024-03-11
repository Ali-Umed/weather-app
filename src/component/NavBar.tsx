import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function NavBar({
  query,
  setQuery,
  isDayMode,
  toggleDayMode,
}: {
  query: string;
  setQuery: (que: string) => void;
  isDayMode: boolean;
  toggleDayMode: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("navbar-search");
      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHomeClick = () => {
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav
        className={`${
          isDayMode ? "bg-[#fff]" : "bg-[#00000059]"
        } border-gray-200`}
      >
        <div className="max-w-screen-lg flex items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center" onClick={handleHomeClick}>
            <FiSun className="h-8 w-8 text-[#90c0df] mr-3" />
          </a>
          <div className="relative block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#90c0df]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                color="currentColor"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              id="search-navbar"
              className={`block w-full p-2 pl-10 text-sm text-gray-900 border rounded-lg ${
                isDayMode
                  ? "bg-[#F1F9FE] border-[#90c0df] focus:ring-[#90c0df] focus:outline-none focus:border-[#90c0df]"
                  : "bg-[#00000000] text-white border-gray-600 focus:ring-[#90aec2da] focus:outline-none focus:border-[#83a0b4d5]"
              }`}
              placeholder="Search..."
            />
          </div>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={toggleMenu}
              className={`${
                isMenuOpen ? "invisible" : ""
              } md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#90c0df] rounded-lg  focus:outline-none focus:ring-1 focus:ring-[#90c0df] `}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen
                ? "flex z-50 absolute  right-0 -top-4 md:hidden  "
                : "hidden"
            } md:flex md:w-auto md:order-1  `}
            id="navbar-search"
          >
            <ul
              className={`  flex flex-col items-center p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                isDayMode
                  ? "bg-[#fff] border border-gray-300 "
                  : "bg-[#00000059] border border-gray-500 "
              }`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-400 hover:text-cyan-600 rounded md:p-0"
                  aria-current="page"
                  onClick={handleHomeClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:text-cyan-600 md:p-0"
                  onClick={handleAboutClick}
                >
                  About
                </a>
              </li>
              <li>
                <div
                  className="relative w-10 h-6 flex items-center cursor-pointer"
                  onClick={() => {
                    toggleDayMode();
                    setIsMenuOpen(false);
                  }}
                >
                  <div
                    className={`absolute inset-0 ${
                      isDayMode ? "bg-gray-200" : "bg-gray-800"
                    }  rounded-full transition duration-300 ease-in-out`}
                  ></div>
                  <FiSun
                    className={`absolute left-0 top-0 w-6 h-6 text-[#fff] transition-all duration-500 ${
                      isDayMode ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <FiMoon
                    className={`absolute right-0 top-0 w-6 h-6 text-black transition-all duration-500 ${
                      isDayMode ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
