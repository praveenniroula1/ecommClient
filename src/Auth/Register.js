import React, { useState } from "react";
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  answer: "",
};

const Register = () => {
  const navigate = useNavigate();
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
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="register form-container">
        <h1>Register page</h1>
        <form onSubmit={handleOnSubmit}>
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
          <div className="mb-3">
            <input
              type="text"
              value={form.answer}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your favorite sports?"
              name="answer"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
