import React, { ReactNode, useState } from "react";

import Navigation from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Navigation setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <main className="h-screen">{children}</main>
    </div>
  );
};

export default Layout;
