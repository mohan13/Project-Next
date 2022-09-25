import React from "react";
import { Schema } from "../Schema/Schema";
import { FormData } from "./FormData";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Form1 = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
        }}
        validationSchema={Schema}
        render={({ errors, touched, handleSubmit }) => {
          return (
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 class="text-gray-900  text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <Form onSubmit={handleSubmit}>
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
                <button class="mt-4 text-ButtonText bg-Button border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
