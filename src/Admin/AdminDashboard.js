import React from "react";
import Layout from "../Layout/Layout";
import Adminmenu from "../Layout/Adminmenu";
import { useAuth } from "../Context/Auth";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            {" "}
            <div className="card w-75 p-3">
              <h1>Admin Name: {auth?.user?.fullName}</h1>
              <h1>Admin Email: {auth?.user?.email}</h1>
              <h1>Admin Phone: {auth?.user?.phone}</h1>
            </div>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default AdminDashboard;
