import React from "react";
import { FaUserAlt } from "react-icons/fa";
const profile = () => {
  return (
    <div className="flex bg-gray-100 p-2 text-xl bg-opacity-50 justify-end items-center gap-2 lg:w-5/6 md:w-4/5 mx-auto mt-2 hover:text-blue-600">
      Login
      <FaUserAlt/>
    </div>
  );
};

export default profile;
