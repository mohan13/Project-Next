import React from "react";
import Table from "../../Components/PageComponents/Table/index";
import TableHead from "../../Components/PageComponents/Table/tHead";
import Layout from "../../HOC/Layout/Layout";
import { AppWrapper, AppContext } from "../../Context/context";
const index = () => {
  return (
    <AppWrapper>
      <AppContext.Consumer>
        {(Context) => {
          return (
            <Layout>
              <TableHead/>
              <Table />
            </Layout>
          );
        }}
      </AppContext.Consumer>
    </AppWrapper>
  );
};

export default index;
