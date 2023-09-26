import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateAdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("LoggedUserId");

  const [userRole, setUserRole] = useState("User");


  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/user/users/${userId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setUserRole(data.user.role);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

 if (token && userRole === "Admin") {
    return children;
  } 
}
export default PrivateAdminRoute;
