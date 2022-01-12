import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [regValues, setRegValues] = useState(initialValues);
  const [sucess, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function onChange(e) {
    setRegValues({ ...regValues, [e.target.name]: e.target.value });

    console.log(regValues);
  }

  function onSubmit(e) {
    e.preventDefault();

    const response = axios
      .post("http://localhost:1337/api/auth/local/register", {
        firstname: regValues.firstname,
        lastname: regValues.lastname, 
        email: regValues.email,
        password: regValues.password,
      })
      .then((e) => {
        if (e.data.user) setSuccess(true);
      })
      .catch((err) => {
        setError("Something went wrong, try again");
      });

    console.log(response);
  }

  return (
    <>
      {/* Hur till strapi så det fungerar? utan error*/}
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">
            Register here
          </h1>
          <h1 className="text-center mt-4">{error}</h1>
          <form action="" className="mt-6" onSubmit={onSubmit}>
            <div className="my-5 text-sm">
              <label className="block text-black">First name:</label>
              <input
                type="text"
                id="firstname"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="First name"
                value={regValues.firstname}
                name="firstname"
                onChange={onChange}
              />
            </div>
            <div className="my-5 text-sm">
              <label className="block text-black">Last name:</label>
              <input
                type="text"
                id="lastname"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Last name"
                value={regValues.lastname}
                name="lastname"
                onChange={onChange}
              />
            </div>
            <div className="my-5 text-sm">
              <label className="block text-black">E-mail:</label>
              <input
                type="text"
                id="email"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="E-mail"
                value={regValues.email}
                name="email"
                onChange={onChange}
              />
            </div>
            <div className="my-5 text-sm">
              <label className="block text-black">Password:</label>
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
                value={regValues.password}
                name="password"
                onChange={onChange}
              />
              <div className="flex justify-end mt-2 text-xs text-gray-600"></div>
            </div>

            <button className="block text-center text-metal bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Register
            </button>
            
            <p class="mt-12 text-xs text-center font-light text-gray-400">
            Already a member?
            <Link to="/login" class="text-black font-medium">
              Back to login
            </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
