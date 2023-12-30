import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../Context/Auth";
import axios from "axios";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useAuth([]);
  const [categories, setCategories] = useAuth([]);

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
        </div>
        <div className="col-md-9">
          {" "}
          <h4 className="text-center">All products</h4>
          <div className="d-flex flex-wrap">
            {" "}
            {products?.map((p) => {
              return (
                <div className="card m-2" style={{ width: "20rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
