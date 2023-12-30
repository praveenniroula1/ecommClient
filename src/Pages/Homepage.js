import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../Context/Auth";
import axios from "axios";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useAuth([]);
  const [categories, setCategories] = useAuth([]);

  const getAllcategory = async () => {
    const { data } = await axios.get("/api/v1/category/get-category");
    if (data.success) {
      setCategories(data?.category);
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllcategory();
  }, []);

  // get products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("api/v1/product/get-product");
      setProducts(data.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <h4 className="text-center">FIlter by Category</h4>
          {categories?.map((c) => (
            <Checkbox key={c._id} onChange={(e) => console.log(e)}>
              {c.name}
            </Checkbox>
          ))}
        </div>
        <div className="col-md-9">
          {" "}
          <h4 className="text-center">All products</h4>
          <div className="d-flex flex-wrap">
            {" "}
            {products?.map((p) => {
              return (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card m-2" style={{ width: "20rem" }}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                      <button className="btn btn-primary ms-1">
                        More Details
                      </button>
                      <button className="btn btn-secondary ms-1">
                        More Details
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
