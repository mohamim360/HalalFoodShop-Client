import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddProducts from "../Dashboard/Admin/AddProducts";

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
				children:[
					{
						path:"/dashboard/addProducts",
						element:<AddProducts/>
					}
			
				]
      },
    ],
  },
]);
