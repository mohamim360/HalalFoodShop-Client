import React from "react";

function AddProducts() {
  return (
    <>
      <form className="mx-auto mt-4">
        <div className="form-control w-full rounded-lg border-4">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs m-4"
          />
					
					<input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs m-4"
          />
					<input
            type="number"
            placeholder="Number of Product"
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
            placeholder="Description"
            rows={4}
          ></textarea>
          <div className="text-center mb-2">
            <button className="btn btn-outline">Add Products</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProducts;
