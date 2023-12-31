import React from "react";
import Layout from "../Layout/Layout";
import Adminmenu from "../Layout/Adminmenu";

const Users = () => {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 ">
        <div className="row ">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <h1>All users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
