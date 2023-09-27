import React, { useState } from "react";

function EditProductForm(props) {
  const [formData, setFormData] = useState({
    name: props.productData.product.name,
    price: props.productData.product.price,
    quantity: props.productData.product.quantity,
    description: props.productData.product.description,
    category: props.productData.product.category,
  });

  const token = localStorage.getItem("token");

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
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prodId = props.prodId;
    const response = await fetch(
      `http://localhost:5000/admin/product/products/edit-product/${prodId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();

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
            value={formData.name}
            onChange={nameHandler}
          />

          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs mb-4"
            value={formData.price}
            onChange={priceHandler}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs mb-4"
            value={formData.quantity}
            onChange={quantityHandler}
          />

          <select
            className="select select-bordered w-full max-w-xs mb-4"
            value={formData.category}
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
            value={formData.description}
            onChange={descriptionHandler}
          ></textarea>
          <div className="text-center mb-2">
            <button className="btn btn-outline">Update Product</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditProductForm;
