import React, { ReactNode, useState } from "react";

import Navigation from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navigation setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <main className="mt-20">{children}</main>
    </>
  );
};

export default Layout;
