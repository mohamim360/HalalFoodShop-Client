import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem("token");

  const tokenExpiration = localStorage.getItem("expiryDate");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && tokenExpiration) {
      const currentTime = Date.now();
      const expirationTime = new Date(tokenExpiration).getTime();

      if (currentTime > expirationTime) {
        logout();
      }
    }
  }, [token, tokenExpiration]);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedUserId");
    localStorage.removeItem("expiryDate");
    navigate("/login");
  }

  return (
    <>
      <div className="navbar shadow-xl rounded-lg  hover:bg-white  border-4 h-4 mb-2 flex justify-between">
        <div>
          <Link to="/" className="btn normal-case text-xl">
            HalalFood Shop
          </Link>
        </div>
        <div>
          <ul className="flex flex-row  shadow menu menu-sm bg-base-100 rounded-box ">
            <li>
              <Link to="/products/all-products">Products</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-4">
          <div>
            {/* <div className="dropdown dropdown-end"> */}
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label> */}
            <ul className="flex flex-row  shadow menu menu-sm bg-base-100 rounded-box ">
              {/* <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            > */}
              {token ? (
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
