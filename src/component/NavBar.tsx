import { FiMapPin, FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";
import { GiHummingbird } from "react-icons/gi";

export default function NavBar({
  query,
  setQuery,
  isDayMode,
  toggleDayMode,
  getLocation,
}: {
  query: string;
  setQuery: (que: string) => void;
  isDayMode: boolean;
  toggleDayMode: () => void;
  getLocation: () => void;
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

    const footerElement = document.getElementById("footer");

    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav
        className={`rounded-2xl mx-4 mt-4 mb-2 smooth-transition ${
          isDayMode ? "glass-day" : "glass-night"
        }`}
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={handleHomeClick}
          >
            <GiHummingbird className="h-9 w-9 text-sky-500 group-hover:scale-110 smooth-transition" />
            <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              WeatherApp
            </span>
          </a>

          <div className="flex items-center gap-4">
            <FiMapPin
              className="w-6 h-6 text-sky-500 cursor-pointer hover-scale smooth-transition"
              onClick={getLocation}
            />
            <div className="relative block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="sr-only">Location icon</span>
                <svg
                  className="w-4 h-4 text-sky-500"
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
                className={`block w-full p-2.5 pl-10 text-sm rounded-xl smooth-transition ${
                  isDayMode
                    ? "bg-white/60 border border-sky-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    : "bg-slate-800/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                } outline-none`}
                placeholder="Search location..."
              />
            </div>
          </div>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={toggleMenu}
              className={`${
                isMenuOpen ? "invisible" : ""
              } md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sky-500 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 smooth-transition`}
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
                ? "flex z-50 absolute right-6 top-4 md:hidden animate-slideInRight"
                : "hidden"
            } md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <ul
              className={`flex flex-col items-center p-4 md:p-0 mt-4 font-medium rounded-xl md:flex-row md:space-x-8 md:mt-0 md:border-0 smooth-transition ${
                isDayMode
                  ? "glass-day"
                  : "glass-night"
              }`}
            >
              <li>
                <a
                  href="#"
                  className={`block py-2 px-4 rounded-lg smooth-transition ${
                    isDayMode
                      ? "text-gray-700 hover:text-sky-600 hover:bg-white/20"
                      : "text-gray-300 hover:text-sky-400 hover:bg-white/10"
                  }`}
                  aria-current="page"
                  onClick={handleHomeClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className={`block py-2 px-4 rounded-lg smooth-transition ${
                    isDayMode
                      ? "text-gray-700 hover:text-sky-600 hover:bg-white/20"
                      : "text-gray-300 hover:text-sky-400 hover:bg-white/10"
                  }`}
                  onClick={handleAboutClick}
                >
                  About
                </a>
              </li>
              <li>
                <div
                  className="relative w-14 h-7 flex items-center cursor-pointer rounded-full smooth-transition hover-scale"
                  onClick={() => {
                    toggleDayMode();
                    setIsMenuOpen(false);
                  }}
                >
                  <div
                    className={`absolute inset-0 ${
                      isDayMode ? "bg-sky-200" : "bg-slate-700"
                    } rounded-full smooth-transition`}
                  ></div>
                  <div
                    className={`absolute w-6 h-6 bg-white rounded-full shadow-md smooth-transition ${
                      isDayMode ? "left-1" : "left-7"
                    }`}
                  >
                    {isDayMode ? (
                      <FiSun className="w-full h-full p-1 text-amber-500" />
                    ) : (
                      <FiMoon className="w-full h-full p-1 text-indigo-500" />
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
