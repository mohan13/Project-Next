import React from "react";
import Form from "../../Components/PageComponents/Form/firstForm";
import Layout from "../../HOC/Layout/Layout";
import { AppWrapper, AppContext } from "../../Context/context";
const index = () => {
  return (
    <AppWrapper>
      <AppContext.Consumer>
        {(context) => {
          return (
            <Layout>
              <Form />
            </Layout>
          );
        }}
      </AppContext.Consumer>
    </AppWrapper>
  );
};

export default index;
