import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../Context/Auth";

const Homepage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Homepage;
