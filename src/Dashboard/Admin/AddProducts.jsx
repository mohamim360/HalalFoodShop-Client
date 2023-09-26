import React, { useEffect, useState } from "react";
import { useEditProduct } from "../../Hooks/EditProductProvider";

function AddProducts() {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    category: "",
  });

  const { editProductData } = useEditProduct();
  // console.log(editProductData.editing);

  const nameHandler = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const priceHandler = (e) => {
    setFormData({ ...formData, price: parseFloat(e.target.value) });
  };

  const quantityHandler = (e) => {
    setFormData({ ...formData, quantity: parseFloat(e.target.value) });
  };

  const descriptionHandler = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const categoryHandler = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const apiUrl = editProductData.editing
    ? `http://localhost:5000/admin/product/edit-products/${editProductData.product._id}`
    : "http://localhost:5000/admin/product/add-products";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(formData);
    setFormData({
      name: "",
      price: "",
      quantity: "",
      description: "",
      category: "",
    });
  };

  return (
    <>
      <form className="mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="form-control w-full rounded-lg border-4 p-8">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs mb-4"
            value={
              editProductData.editing
                ? editProductData.product.name
                : formData.name
            }
            onChange={nameHandler}
          />

          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs mb-4"
            value={
              editProductData.editing
                ? editProductData.product.price
                : formData.price
            }
            onChange={priceHandler}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs mb-4"
            value={
              editProductData.editing
                ? editProductData.product.quantity
                : formData.quantity
            }
            onChange={quantityHandler}
          />

          <select
            className="select select-bordered w-full max-w-xs mb-4"
            value={
              editProductData.editing
                ? editProductData.product.category
                : formData.category
            }
            onChange={categoryHandler}
          >
            <option disabled value="">
              Category
            </option>
            <option value="Meat & Fish">Meat & Fish</option>
            <option value="Masala & Species">Masala & Species</option>
            <option value="Snacks & Sweets">Snacks & Sweets</option>
          </select>
          {/* <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mb-4"
          /> */}
          <textarea
            className="textarea textarea-bordered w-full max-w-xs mb-4"
            placeholder="Description"
            rows={4}
            value={
              editProductData.editing
                ? editProductData.product.description
                : formData.description
            }
            onChange={descriptionHandler}
          ></textarea>
          <div className="text-center mb-2">
            <button className="btn btn-outline">
              {editProductData.editing ? "Edit Product" : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProducts;
