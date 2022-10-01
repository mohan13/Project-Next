import React from "react";

import Toolbar from "../../Components/Navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <div
      className="flex"
    >
      <div className=" h-screen border-r-2  ">
        <Toolbar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
