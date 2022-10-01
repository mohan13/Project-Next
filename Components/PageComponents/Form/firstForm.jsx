import React from "react";
import { Schema } from "../Schema/Schema";
import { FormData } from "./FormData";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Form1 = ({ context }) => {
  return (
    <div className="lg:w-5/6 md:w-4/5 mx-auto">
      <h1 class="sm:text-3xl text-2xl font-medium title-font my-4 text-gray-900">
        Contact Us
      </h1>
      <Formik
        initialValues={{
          title: "",
          subTitle: "",
          paragraph: "",
          image: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          alert("Sucessfull !");
          console.log(values);
          await onSubmit(values);
          resetForm();
        }}
        validationSchema={Schema}
        render={({ handleSubmit }) => {
          return (
            <div className=" bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
              <Form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 border p-4 gap-8"
              >
                {FormData?.map((val, i) => {
                  return (
                    <div key={i}>
                      <label class="leading-7 text-sm text-gray-600">
                        {val.label}
                      </label>
                      <Field
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type={val.type}
                        name={val.name}
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name={val.name}
                        component="div"
                      />
                    </div>
                  );
                })}
                <button
                  type="submit"
                  class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Form1;
