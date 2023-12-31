import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import UserMenu from "../Layout/UserMenu";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};
const Profile = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", form);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <form onSubmit={handleOnSubmit}>
              <h4>User Profile</h4>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Address"
                  name="address"
                  value={form.address}
                  onChange={handleOnChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
