import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddProducts from "../Dashboard/Admin/AddProducts";
import Login from "../Auth/Login";
import SignUp from "../Auth/Signup";
import AllUsers from "../Dashboard/Admin/AllUsers";
import PrivateAdminRoute from "./PrivateAdminRoute";
import ManageProducts from "../Dashboard/Admin/ManageProducts";
import EditProduct from "../Dashboard/Admin/EditProduct";

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
                <EditProduct/>
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
