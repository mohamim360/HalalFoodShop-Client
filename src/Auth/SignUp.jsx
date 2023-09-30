import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const nameHandler = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const emailHandler = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    setMessage(data.message);
    console.log(formData);
    setIsLoading(false);
    if (response.ok) {
      navigate("/login");
    }
  };

  return (
    <>
      {!isLoading ? (
        <form onSubmit={submitHandler} className="flex justify-center">
          {message && message.length > 0 ? (
            <div className="alert alert-warning">
              <span>{message}</span>
            </div>
          ) : (
            ""
          )}
          <div className="form-control w-full max-w-xs m-auto rounded-lg m-6 p-4 border-4">
            <h1 className="m-auto pb-6 text-4xl text-gray-900 font-bold">
              SignUp
            </h1>
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
              value={formData.name}
              onChange={nameHandler}
            />
            <label className="label">
              <span className="label-text-alt">
                Name felid can not be Empty
              </span>
            </label>

            <label className="label pt-6">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              value={formData.email}
              onChange={emailHandler}
            />
            <label className="label">
              <span className="label-text-alt">
                Enter a valid and non-existing email
              </span>
            </label>

            <label className="label pt-6">
              <span className="label-text">Enter Your Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              value={formData.password}
              onChange={passwordHandler}
            />
            <label className="label">
              <span className="label-text-alt">
                The minimum password length must be six characters.
              </span>
            </label>

            {/* <label className="label pt-6">
              <span className="label-text">Confirm Your Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
              value={formData.password}
              onChange={passwordHandler}
            /> */}

            <div className="pt-4">
              <button className="btn btn-outline">SignUp</button>
            </div>

            <p className="p-4">
              Already have a Account?
              <Link to="/login" className="font-semibold">
                Login
              </Link>
            </p>
          </div>
        </form>
      ) : (
        <div className="m-auto flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default SignUp;
