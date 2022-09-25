import React from "react";
import { TableData } from "./TData";
const Index = () => {
  return (
    <div>
      <div>
        <div class="text-gray-600 body-font">
          <div class="container mx-auto">
            <div class="flex flex-col text-center w-full ">
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900">
                Pricing
              </h1>
            </div>
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
              <div className=" w-full text-center whitespace-no-wrap ">
                {TableData?.map((val, i) => {
                  return (
                    <div
                      key={i}
                      className={`grid grid-cols-5 gap-4 items-center title-font tracking-wider font-medium text-gray-900 text-sm  ${
                        i === 0 ? " bg-gray-100" : ""
                      }`}
                    >
                      <div class="px-4 py-3">{val.plan}</div>
                      <div class="px-4 py-3">{val.speed}</div>
                      <div class="px-4 py-3">{val.storage}</div>
                      <div class="px-4 py-3 ">{val.price}</div>
                      <div class="px-4 py-3 ">
                        <div>{val.Edit}</div>
                        <div
                          className={`flex justify-between  ${
                            i === 0 ? "hidden" : ""
                          }`}
                        >
                          <div className="cursor-pointer border transition duration-300 ease-in-out border-red-600 bg-white text-red-600  hover:text-white py-1 px-2  hover:bg-red-600 ">
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
            {/* <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
