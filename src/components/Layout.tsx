import React, { ReactNode, useState } from "react";

import Navigation from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children?: ReactNode;
  isHome?: boolean;
}

const Layout = ({ children, isHome = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Navigation setIsOpen={setIsOpen} isHome={isHome} />
      <Sidebar isOpen={isOpen} />
      <main className={`h-screen ${!isHome && "pt-20"}`}>{children}</main>
    </div>
  );
};

export default Layout;
