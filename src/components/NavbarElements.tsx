import { Link } from "gatsby";
import * as React from 'react';

interface NavbarElementsProps {}

const NavbarElements: React.FC<NavbarElementsProps> = () => {
  return (
    <ul className="flex flex-col items-center md:flex-row md:space-x-5 md:items-start lg:space-x-7 md:mt-0 md:text-sm md:font-medium bg-transparent">
      <li className="mb-1 md:mb-0">
        <Link
          to="/"
          className="text-base text-purple-700 md:rounded-lg ml-1 lg:ml-7 p-2 md:hover:shadow-lg hover:shadow-purple-800"
          activeClassName="md:shadow-sm md:shadow-purple-800"
        >
          HOME
        </Link>
      </li>
      <li className="mb-1 md:mb-0">
        <Link
          to="/about"
          className="text-base text-purple-700 md:rounded-lg ml-1 lg:ml-7 p-2 md:hover:shadow-lg hover:shadow-purple-800"
          activeClassName="md:shadow-sm md:shadow-purple-800"
        >
          ABOUT
        </Link>
      </li>
      <li className="mb-1 md:mb-0">
        <Link
          to="/events"
          className="text-base text-purple-700 md:rounded-lg ml-1 lg:ml-7 p-2 md:hover:shadow-lg hover:shadow-purple-800"
          activeClassName="md:shadow-sm md:shadow-purple-800"
        >
          EVENTS
        </Link>
      </li>
      <li className="mb-1 md:mb-0">
        <Link
          to="/achievements"
          className="text-base text-purple-700 md:rounded-lg ml-1 lg:ml-7 p-2 md:hover:shadow-lg hover:shadow-purple-800"
          activeClassName="md:shadow-sm md:shadow-purple-800"
        >
          ACHIEVEMENTS
        </Link>
      </li>
      <li className="mb-1 md:mb-0">
        <Link
          to="/team"
          className="text-base text-purple-700 md:rounded-lg ml-1 lg:ml-7 p-2 md:hover:shadow-lg hover:shadow-purple-800"
          activeClassName="md:shadow-sm md:shadow-purple-800"
        >
          TEAM
        </Link>
      </li>
      <li className="mb-1 md:mb-0">
        <Link
          to="/contact"
          className="text-base text-purple-700 md:rounded-lg ml-1 lg:ml-7 p-2 md:hover:shadow-lg hover:shadow-purple-800"
          activeClassName="md:shadow-sm md:shadow-purple-800"
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default NavbarElements;
