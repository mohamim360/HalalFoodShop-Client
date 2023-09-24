import React from "react";

function AddProducts() {
  return (
    <>
      <form className="mx-auto">
        <div className="form-control w-full rounded-lg p-6 border-4">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs m-4"
          />
          <input
            type="text"
            placeholder="Product Price"
            className="input input-bordered w-full max-w-xs m-4"
          />
          <select className="select select-bordered w-full max-w-xs m-4">
            <option disabled selected>
              Category
            </option>
            <option>Meat & Fish</option>
            <option>Masala & Species</option>
            <option>Snacks & Sweets</option>
          </select>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs m-4"
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xs m-4"
            placeholder="Bio"
            rows={4}
          ></textarea>
          <div className="text-center">
            <button className="btn btn-outline">Add Products</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProducts;
