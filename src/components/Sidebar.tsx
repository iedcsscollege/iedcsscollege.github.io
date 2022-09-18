import * as React from "react";
import NavbarElements from "./NavbarElements";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`absolute ${
        isOpen ? "flex translate-y-0" : "-translate-y-full"
      } transition-all duration-700 md:hidden flex-col items-center z-10 bg-white w-full`}
    >
      <NavbarElements />
    </div>
  );
};

export default Sidebar;
