import React, { useState } from "react";

function AddProducts() {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    category: "",
    image: null, // Add image field to store the selected file
  });

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

  const imageHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Update image field with the selected file
  };

  const categoryHandler = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("image", formData.image); // Append the selected file

    const response = await fetch(
      "https://halalfoodshop.onrender.com/admin/product/add-products",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formDataToSend,
      }
    );
    const data = await response.json();
    console.log(data);
    setFormData({
      name: "",
      price: "",
      quantity: "",
      description: "",
      category: "",
      image: null, // Reset image field after form submission
    });
  };

  return (
    <>
      <form
        className="mx-auto mt-4"
        onSubmit={handleSubmit}
        encType="multipart/from-data"
      >
        <div className="form-control w-full rounded-lg border-4 p-8">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs mb-4"
            value={formData.name}
            onChange={nameHandler}
          />
          <input
            type="file"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-gray-700
      hover:file:bg-violet-100 m-4
    "
            name="image"
            onChange={imageHandler}
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
            <button className="btn btn-outline">Add Products</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProducts;
