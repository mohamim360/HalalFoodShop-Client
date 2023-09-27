import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5000/admin/product/products",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    setProducts(data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (prodId) => {
    const response = await fetch(
      `http://localhost:5000/admin/product/products/${prodId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.ok) {
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== prodId));
    } else {
      console.error("Failed to delete user");
    }
  };

  return (
    <>
      {!isLoading && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <th>
                    <Link to={`/dashboard/edit-products/${product._id}`}>
                      <button className="btn btn-outline btn-sm mr-2">
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
      {isLoading && (
        <div className="m-auto flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default ManageProducts;
