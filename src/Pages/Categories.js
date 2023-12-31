import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import useCategory from "../Hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout>
      <h1>All Categories</h1>
      <div className="row">
        {categories.map((c) => (
          <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
            <Link to={`/category/${c.slug}`} className="btn btn-primary">
              {c.name}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
