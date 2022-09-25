import React from "react";

import Toolbar from "../../Components/Navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <div
      className="grid grid-cols-5"
    >
      <div className=" w-full h-screen border-r-2 ">
        <Toolbar />
      </div>
      <div className=" col-span-4">{children}</div>
    </div>
  );
};

export default Layout;
