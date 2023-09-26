import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";
import { EditProductProvider } from "./Hooks/EditProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EditProductProvider>
      <RouterProvider router={router} />
    </EditProductProvider>
  </React.StrictMode>
);
