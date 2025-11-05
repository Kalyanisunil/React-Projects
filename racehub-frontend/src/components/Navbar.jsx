import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Landwind
          </span>

          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/teams" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/drivers" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Drivers
                </Link>
              </li>
              <li>
                <Link to="/races" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Races
                </Link>
              </li>
              <li>
                <Link to="/results" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
