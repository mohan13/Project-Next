import React, { useContext } from "react";
import { AppContext } from "../../../Context/context";
import { TableData } from "./TData";
const Index = ({ Context }) => {
  const value = useContext(AppContext);
  const Remove = () => {
    alert("deleted");
  };
  return (
    <div class="text-gray-600 body-font">
      <div className="px-5 mx-auto text-center bg-white whitespace-no-wrap ">
        {TableData?.map((val, i) => {
          return (
            <div
              key={i}
              className={`grid grid-cols-6 gap-4 items-center border-b-2 px-4 py-3 border-gray-200 font-medium text-gray-900 text-sm  ${
                i === 0 ? " bg-gray-100" : ""
              }`}
            >
              <div class="px-4 ">{val.sn}</div>
              <div class="px-4 ">{val.plan}</div>
              <div class="px-4 ">{val.speed}</div>
              <div class="px-4 ">{val.storage}</div>
              <div class="px-4 ">{val.price}</div>
              <div class="px-4 ">
                <div>{val.Edit}</div>
                <div
                  className={`flex gap-4 justify-center  ${i === 0 ? "hidden" : ""}`}
                >
                  <div
                    onClick={Remove}
                    className="cursor-pointer border transition duration-300 ease-in-out border-red-600 bg-white text-red-600  hover:text-white py-1 px-2  hover:bg-red-600 "
                  >
                    Delete
                  </div>
                  <div className="cursor-pointer border transition duration-300 ease-in-out  border-blue-600 bg-white text-blue-600  hover:text-white py-1 px-2  hover:bg-blue-600">
                    Edit
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
