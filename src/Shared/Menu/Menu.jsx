import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PrivateAdminRoute from "../../Routes/PrivateAdminRoute";

function Menu() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const linkHandler = (e) => {
    if (!token) {
      e.preventDefault();
      navigate("/login");
    }
  };
  return (
    <>
      <ul className="menu bg-base-200 w-56 rounded-box w-max">
        <PrivateAdminRoute>
          <li className="p-2">
            <Link to="/dashboard/addProducts">Add Products</Link>
          </li>
          <li className="p-2">
            <Link to="/dashboard/allUsers">All Users</Link>
          </li>
          <li className="p-2">
            <Link to="/dashboard/manage-products">Manage Products</Link>
          </li>
        </PrivateAdminRoute>

        <li className="p-2">
          <Link to="/dashboard/cart" onClick={(e) => linkHandler(e)}>
            My Cart
          </Link>
        </li>
        {/* <li className="p-2">
          <Link to="/dashboard/order" onClick={(e) => linkHandler(e)}>
            My Order
          </Link>
        </li> */}
      </ul>
    </>
  );
}

export default Menu;
