import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Adminmenu from "../Layout/Adminmenu";
import axios from "axios";
import toast from "react-hot-toast";
import CategoryForm from "../Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllcategory();
      } else {
        toast.error(`${data.message}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("something wrong in input form");
    }
  };
  const getAllcategory = async () => {
    const { data } = await axios.get("/api/v1/category/get-category");
    if (data.success) {
      setCategories(data.category);
    }
    try {
    } catch (error) {
      console.log(error);
      toast.error("Somehing wrong in getting category");
    }
  };
  useEffect(() => {
    getAllcategory();
  }, []);

  // update category
  const handleOnUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated.`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllcategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somehing is wrong");
    }
  };
  const handleOnDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`category is deleated.`);
        getAllcategory();
      } else {
        toast.error("something is wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Somehing is wrong");
    }
  };
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 ">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Catgeory</h1>
            <div className="p-3">
              <CategoryForm
                handleOnSubmit={handleOnSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c) => (
                    <>
                      <tr>
                        {" "}
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleOnDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleOnSubmit={handleOnUpdate}
            />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
