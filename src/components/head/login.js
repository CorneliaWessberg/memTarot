import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import Register from "./registration";
import { Link } from "react-router-dom";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [logInValues, setLogInValues] = useState(initialValues);
  const [jwt, setJwt] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState("");

  function modalOpen() {
    setOpenModal(true);
  }

  function modelClose() {
    setOpenModal(false);
  }

  function onChange(e) {
    setLogInValues({ ...logInValues, [e.target.name]: e.target.value });

    console.log(logInValues);
  }

  function onSubmit(e) {
    e.preventDeafult();

    axios
      .post("http://localhost:1337/auth/local", {
        identifier: logInValues.email,
        password: logInValues.password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);

        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("username", response.data.user.username);
      })
      .catch((err) => {
        console.log(err);
        setError(
          "Your informationen doesn't match any user, try again or register if you don't have an account :)"
        );
      });
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <label class="block text-md font-light mb-2" for="username">
            Username
          </label>
          <input
            class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            id=""
            placeholder="Username"
          ></input>
        </div>
        <div class="mb-4">
          <label class="block text-md font-light mb-2" for="password">
            Password
          </label>
          <input
            class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          ></input>
        </div>

        <div class="flex items-center justify-between mb-5">
          <button
            class="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            LOGIN
          </button>
          <a
            class="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <p class="text-center text-md font-light">
          Don't have an account?{" "}
          <Link to="/registration" class="font-light text-md text-indigo-600">
            Register here
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
