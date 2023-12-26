import React, { useState } from "react";
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  newPassword: "",
  answer: "",
};

const ForgotPassword = () => {
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
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email: form.email,
        newPassword: form.newPassword,
        answer: form.answer,
      });
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="register">
        <h1>Password Reset page</h1>
        <form onSubmit={handleOnSubmit}>
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
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your favourite Sport?"
              name="answer"
              value={form.answer}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="New Password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
