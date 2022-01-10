import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./registration";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [logInValues, setLogInValues] = useState(initialValues);
  const history = useNavigate();
  const [jwt, setJwt] = useState("");
  const [error, setError] = useState("");

  function onChange(e) {
    setLogInValues({ ...logInValues, [e.target.name]: e.target.value });

    console.log(logInValues);
  }

  function onSubmit(e) {
    e.preventDeafult();

    axios
      .post("http://localhost:1337/api/auth/local", {
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

        history("sucess");
      });
  }

  return (
    <>
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div class="py-8 px-8 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
          <h1>{error}</h1>
          <form class="mt-6" onSubmit={onSubmit} method="POST">
            <div class="my-5 text-sm">
              <label class="block text-black">E-mail</label>
              <input
                type="text"
                name="email"
                id="username"
                value={logInValues.email}
                onChange={onChange}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="E-mail"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={logInValues.password}
                onChange={onChange}
                class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <div class="flex justify-end mt-2 text-xs text-gray-600">
                <Link to="/forgotPassword">Forget Password?</Link>
              </div>
            </div>

            <button class="block text-center text-metal bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Login
            </button>
          </form>

          <div class="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
                Facebook
              </button>
            </div>
            <div>
              <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
                Twitter
              </button>
            </div>
          </div>

          <p class="mt-12 text-xs text-center font-light text-gray-400">
            Don't have an account?
            <Link to="./registration" class="text-black font-medium">
              Create One
            </Link>
          </p>
        </div>
      </div>
      {/* <h1>{error}</h1>
      <form onSubmit={onSubmit} method="">
        <div className="mb-4">
          <label className="block text-md font-light mb-2" for="username">
            E-mail
          </label>
          <input
            className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={logInValues.email}
            name="email"
            id="email"
            placeholder="e-mail"
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-md font-light mb-2" for="password">
            Password
          </label>
          <input
            className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={logInValues.password}
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
          ></input>
        </div>

        <div className="flex items-center justify-between mb-5">
          <button
            className="bg-indigo-600 hover:bg-blue-700 text-metal font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            LOGIN
          </button>
         
          <a
            className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <p className="text-center text-md font-light">
          Don't have an account?
          <Link to="./registration" className="font-light text-md text-indigo-600">
            Register here
          </Link>
        </p>
       </form> */}
    </>
  );
}

export default Login;
