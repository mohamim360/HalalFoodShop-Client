import React, { useEffect, useState } from "react";

function AllProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const response = await fetch(
      "https://halalfoodshop.onrender.com/shop/all-products"
    );
    const data = await response.json();
    setProducts(data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cartHandler = async (prodId) => {
    const response = await fetch(
      `https://halalfoodshop.onrender.com/shop/cart`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prodId }),
      }
    );
  };

  return (
    <>
      {!isLoading ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 m-auto gap-4">
          {products.map((product) => (
            <div key={product._id} className="card w-96 bg-base-100 border-4">
              <figure>
                <img
                  src={`https://halalfoodshop.onrender.com/${product.imageUrl}`} // Constructing the complete URL
                  alt="Product"
                />
              </figure>
              <div className="card-body flex flex-row justify-between flex-wrap">
                <div className="flex flex-col gap-2">
                  <h2 className="card-title">{product.name}</h2>
                </div>
                <div className="my-auto flex flex-col gap-2">
                  <div className="card-actions">
                    <div className="badge badge-outline">
                      {product.category}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                </div>
              </div>
              <div className="text-center mb-2">
                <button
                  className="btn btn-outline"
                  onClick={() => cartHandler(product._id)}
                >
                  Add TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-auto flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default AllProduct;
