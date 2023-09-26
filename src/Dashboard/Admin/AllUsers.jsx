import React, { useEffect, useState } from "react";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/user/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setUsers(data.users);
    setIsLoading(false);
    console.log(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeUserRole = async (userId, currentRole) => {
    const newRole = currentRole === "User" ? "Admin" : "User";

    const response = await fetch(`http://localhost:5000/user/users/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: newRole }),
    });

    if (response.ok) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } else {
      console.error("Failed to update user role");
    }
  };

  const deleteUser = async (userId) => {
    const response = await fetch(`http://localhost:5000/user/users/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.ok) {
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } else {
      console.error("Failed to delete user");
    }
  };

  return (
    <>
      {!isLoading && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {users.map((user) => (
              <tbody key={user._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <th>
                    <button
                      className="btn btn-outline btn-sm mr-2"
                      onClick={() => changeUserRole(user._id, user.role)}
                    >
                      {user.role === "User" ? "Add As Admin" : "Remove Admin"}
                    </button>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
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

export default AllUsers;
