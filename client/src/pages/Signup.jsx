import React, { useState } from "react";
import { Link } from "react-router-dom";
import shop from "../assets/shop.png";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={shop} alt="JAD Grocery" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="mt-2 relative">
              <input
                id="username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
                required
                // set this form to be a peer so that we can assign a floating label
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 rounded-lg"
              />
              <label
                htmlFor="username"
                className={`absolute left-0 top-2 px-2 text-gray-400 text-base transition-all ${
                  formState.username
                    ? "-top-5 text-gray-600 text-base"
                    : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-base"
                }`}
              >
                Username
              </label>
            </div>

            <div className="relative">
              <input
                // set this form to be a peer so that we can assign a floating label
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 rounded-lg"
                placeholder=""
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                autoComplete="email"
                id="email"
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-0 top-2 px-2 text-gray-400 text-base transition-all ${
                  formState.email
                    ? "-top-5 text-gray-600 text-base"
                    : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-base"
                }`}
              >
                Email address
              </label>

              <p className=" mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                {" "}
                Please enter a valid email address
              </p>
            </div>

            <div>
              <div className=" relative mt-2">
                <input
                  placeholder="  ******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  // set this form to be a peer so that we can assign a floating label
                  className=" peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 rounded-lg"
                />
                <label
                  htmlFor="password"
                  className={`absolute left-0 top-2 px-2 text-gray-400 text-base transition-all ${
                    formState.password
                      ? "-top-5 text-gray-600 text-base"
                      : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-base"
                  }`}
                >
                  Password
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
