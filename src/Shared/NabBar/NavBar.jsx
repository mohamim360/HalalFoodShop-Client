import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar  shadow-xl rounded-lg  hover:bg-white  border-4 h-4 mb-2">
        <div className="flex-1">
          <Link to="/" className="btn normal-case text-xl">
            HalalFood Shop
          </Link>
        </div>
        <div className="flex-none gap-2">
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
              {/* {token ? ( */}
                {/* <li>
                  <a onClick={logout}>Logout</a>
                </li>
              ) : ( */}
                {/* <> */}
                  <li>
                    <Link >Login</Link>
                  </li>
                  <li>
                    <Link>Register</Link>
                  </li>
                {/* </> */}
              {/* )} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
