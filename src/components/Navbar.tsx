import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import NavbarElements from "./NavbarElements";

interface Props {
  setIsOpen: (fn: any) => void;
  isHome: boolean;
}
const Navbar: React.FC<Props> = ({ setIsOpen, isHome }) => {
  return (
    <nav
      className={`${
        isHome ? "bg-transparent" : "bg-white"
      } shadow-sm md:shadow-none px-2 sm:px-4 py-2.5 fixed top-0 left-0 right-0 h-20 z-50`}
    >
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center">
        <StaticImage
          src="../images/logo.png"
          alt="iedclogo"
          width={70}
          height={60}
          className="scale-90"
        />
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-purple-800 rounded-lg md:hidden hover:bg-purple-100 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen((prev: any) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
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
        <div className={`hidden md:block w-full md:w-auto`} id="navbar-default">
          <NavbarElements />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
