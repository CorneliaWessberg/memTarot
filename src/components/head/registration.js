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
        console.log("hej");
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        if (e.data.user) setSuccess(true);
      })
      .catch((err) => {
        console.log("error");
        setError("Something went wrong, try again");
      });

    console.log(response);
  }

  return (
    <>
      {/* Hur till strapi så det fungerar? utan error*/}
      <div className="bg-white lg:w-full md:6/12 w-full m-auto my-10 shadow-md mt-36">
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

            <button className="hover:bg-stone-500 w-1/4 block text-center text-white bg-stone-400 p-3 duration-300 rounded-sm">
              Register
            </button>
            
            <p class="mt-12 text-s text-center font-light text-stone-600">
            Already a member?
            <Link to="/login" class="text-stone-700 font-medium ml-2 hover:underline hover:text-stone-900">
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
