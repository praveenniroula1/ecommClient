import React from "react";

const CategoryForm = ({ handleOnSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
