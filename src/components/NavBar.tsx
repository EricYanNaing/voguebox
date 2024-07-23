import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <nav className="bg-white border  px-2 sm:px-4 py-1 rounded  shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to={"/"} className="rounded-full">
          <img src={logo} alt="logo" width={50} className="rounded-full" />
        </Link>
        <div className="flex items-center">
          <button
            id="menu-toggle"
            onClick={() => setHidden((prev) => !prev)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-md rounded-lg hover:bg-gray-100 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Hamburger icon --> */}
            <RiMenu3Line />
          </button>
        </div>

        <div
          className={`w-full  rounded-md my-2 md:block md:w-auto ${
            hidden ? "hidden" : ""
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col md:flex-row  md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:p-0 dark:text-gray-40 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:p-0 dark:text-gray-40 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:p-0 dark:text-gray-40 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:border-0 md:p-0 dark:text-gray-40 md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  //   <script>
  //     const menuToggle = document.getElementById('menu-toggle');
  //     const mobileMenu = document.getElementById('mobile-menu');

  //     menuToggle.addEventListener('click', function () {
  //       mobileMenu.classNameList.toggle('hidden');
  //     });
  //   </script>
};

export default NavBar;
