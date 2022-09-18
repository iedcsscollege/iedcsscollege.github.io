import * as React from "react";
import NavbarElements from "./NavbarElements";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`absolute right-0 top-20 ${
        isOpen ? "flex translate-x-0" : "translate-x-full"
      } transition-all duration-700 md:hidden flex-col items-center z-10 bg-white/30 w-40 py-2 rounded-md backdrop-blur-sm`}
    >
      <NavbarElements />
    </div>
  );
};

export default Sidebar;
