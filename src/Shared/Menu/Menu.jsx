import React from "react";
import { Link } from "react-router-dom";
import PrivateAdminRoute from "../../Routes/PrivateAdminRoute";

function Menu() {
 
  return (
    <>
      <ul className="menu bg-base-200 w-56 rounded-box w-max">
        <PrivateAdminRoute>
          <li className="p-2">
            <Link to="/dashboard/addProducts" >Add Products</Link>
          </li>
          <li className="p-2">
            <Link to="/dashboard/allUsers">All Users</Link>
          </li>
          <li className="p-2">
            <Link to="/dashboard/manage-products">Manage Products</Link>
          </li>
        </PrivateAdminRoute>

        <li className="p-2">
          <Link>My Cart</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
