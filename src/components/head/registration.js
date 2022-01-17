import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaMagic } from "react-icons/fa";

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

    axios
      .post('http://localhost:1337/api/auth/local/register', {
        firstname: regValues.firstname,
        lastname: regValues.lastname,
        email: regValues.email,
        password: regValues.password,
      })
      .then((response) => {
        console.log('hej');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        if (response.data.user) setSuccess(true);
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("firstname", response.data.user.firstname);
        localStorage.setItem("lastname", response.data.user.lastname);
      })
      .catch((err) => {
        console.log('error');
        setError('Something went wrong, try again');
      });

  }

  return (
    <> {sucess ? <h1>Your registration is succesfully done, Welcome! You are now logged in. Lets explore <Link to="/"><i><FaMagic size={30}/></i></Link></h1>
      : <div>
        <h1 className="mt-16 text-xl font-bold text-center">
          Welcome to the Mem-tarot family :)
        </h1>
        <div className="m-auto my-10 mt-16 bg-white shadow-md lg:w-full">
          <div className="px-8 py-8 rounded-xl">
            <h1 className="mt-3 text-2xl font-medium text-center">
              Register here
            </h1>
            <h1 className="mt-4 text-center">{error}</h1>
            <form action="" className="mt-6" onSubmit={onSubmit}>
              <div className="my-5 text-sm">
                <label className="block text-black">First name:</label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
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
                  className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
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
                  className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
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
                  className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
                  placeholder="Password"
                  value={regValues.password}
                  name="password"
                  onChange={onChange}
                />
                <div className="flex justify-end mt-2 text-xs text-gray-600"></div>
              </div>

              <button className="block w-2/4 p-3 text-center text-white duration-300 rounded-sm md:w-1/4 hover:bg-stone-500 bg-stone-400">
                Register
              </button>

              <p class="mt-12 text-s text-center font-light text-stone-600">
                Already a member?
                <Link
                  to="/login"
                  class="text-stone-700 font-medium ml-2 hover:underline hover:text-stone-900"
                >
                  Back to login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Register;
