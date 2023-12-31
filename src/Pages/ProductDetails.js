import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (params?.slug) getPProduct();
  }, [params?.slug]);

  const getPProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSmilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  const getSmilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container mt-2 w-50">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 text-center">
          <h1>Product Details:</h1>
          <h4>Name: {product.name}</h4>
          <h4>description: {product.description}</h4>
          <h4>Price: {product.price}</h4>
          <h4>Category: {product?.category?.name}</h4>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
        <hr />
        <div className="row">
          <h6>Similar Product</h6>
          {relatedProduct.length < 1 && (
            <p className="text-center">No Similar Product Found</p>
          )}
          <div className="d-flex flex-wrap">
            {relatedProduct?.map((p) => (
              <div className="card m-2 w-25" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  {/* <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div> */}
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button className="btn btn-dark ms-1">ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
