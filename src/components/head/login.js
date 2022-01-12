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

    axios.post("http://localhost:1337/api/auth/local", {
        identifier: logInValues.email,
        password: logInValues.password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);

        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("firstname", response.data.user.firstname);
        localStorage.setItem("firstname", response.data.user.lastname);
        
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
          
            </div>

            <button class="block text-center text-metal bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Login
            </button>
          </form>

          <p class="mt-12 text-xs text-center font-light text-gray-400">
            Don't have an account?
            <Link to="/registration" class="text-black font-medium">
              Create One
            </Link>
          </p>
        </div>
      </div>
      
    </>
  );
}

export default Login;
