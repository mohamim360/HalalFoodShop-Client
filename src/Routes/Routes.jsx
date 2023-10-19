import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddProducts from "../Dashboard/Admin/AddProducts";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import AllUsers from "../Dashboard/Admin/AllUsers";
import PrivateAdminRoute from "./PrivateAdminRoute";
import ManageProducts from "../Dashboard/Admin/ManageProducts";
import EditProduct from "../Dashboard/Admin/EditProduct";
import Products from "../Shop/Products";
import Cart from "../Shop/cart/Cart";
import PrivateAuthRoute from "./PrivateAuthRoute";
import Payment from "../Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/all-products",
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/addProducts",
            element: (
              <PrivateAdminRoute>
                <AddProducts />
              </PrivateAdminRoute>
            ),
          },
          {
            path: "/dashboard/edit-products/:prodId",
            element: (
              <PrivateAdminRoute>
                <EditProduct />
              </PrivateAdminRoute>
            ),
          },
          {
            path: "/dashboard/allUsers",
            element: (
              <PrivateAdminRoute>
                <AllUsers />
              </PrivateAdminRoute>
            ),
          },
          {
            path: "/dashboard/manage-products",
            element: (
              <PrivateAdminRoute>
                <ManageProducts />
              </PrivateAdminRoute>
            ),
          },
          {
            path: "/dashboard/cart",
            element: (
              <PrivateAuthRoute>
                <Cart />
              </PrivateAuthRoute>
            ),
          },
          {
            path: "/dashboard/cart/payment",
            element: (
              <PrivateAuthRoute>
                <Payment />
              </PrivateAuthRoute>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
