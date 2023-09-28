import React, { useEffect, useState } from "react";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/shop/cart", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setCarts(data.products);

    setIsLoading(false);
    const totalPrice = data.products.reduce(
      (sum, cartItem) => sum + cartItem.productId.price,
      0
    );
    setTotalPrice(totalPrice);
    console.log(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Total Product Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {carts.map((cart) => (
              <tbody key={cart._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{cart.productId.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>${cart.productId.price}</td>
                  <td>{cart.quantity}</td>
                  <th>
                    <button
                      className="btn btn-outline btn-sm"
                      // onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
          <div>
            <h3>Total Price: ${totalPrice}</h3>
          </div>
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

export default Cart;
