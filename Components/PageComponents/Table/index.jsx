import React, { useContext } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { AppContext } from "../../../Context/context";
import { TableData } from "./TData";
const Index = ({ Context }) => {
  const value = useContext(AppContext);
  const Remove = () => {
    alert("deleted");
  };
  const Edit = () => {
    alert("Let's Edit");
  };
  return (
    <div class="text-gray-600 body-font">
      <div className=" overflow-auto px-2 md:px-5 mx-auto text-center bg-white whitespace-no-wrap ">
        {TableData?.map((val, i) => {
          return (
            <div
              key={i}
              className="w-full text-center gap-2 grid grid-cols-8 md:grid-cols-6 items-center border-b-2 border-gray-200 font-medium  text-gray-900 text-sm md:text-md md:p-2"
            >
              <div>{val.sn}</div>
              <div>{val.plan}</div>
              <div className="col-span-2 md:col-auto ">{val.speed}</div>
              <div>{val.storage}</div>
              <div className="col-span-2 md:col-auto">{val.price}</div>
              <div>
                {val.Edit}
                <div
                  className={`flex md:-flex-col justify-center gap-1 ${
                    i === 0 ? "hidden" : ""
                  }`}
                >
                  <div
                    onClick={Remove}
                    className="cursor-pointe p-1 border transition duration-300 ease-in-out border-red-600 bg-white text-red-600  hover:text-white  hover:bg-red-600 "
                  >
                    <MdDelete />
                  </div>
                  <div
                    onClick={Edit}
                    className="cursor-pointer p-1 border transition duration-300 ease-in-out  border-blue-600 bg-white text-blue-600  hover:text-white hover:bg-blue-600"
                  >
                    <MdModeEditOutline />
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
