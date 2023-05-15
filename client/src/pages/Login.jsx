import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import shop from "../assets/shop.png";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={shop} alt="JAD Grocery" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleFormSubmit}>
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
                className={` absolute left-0 top-2 px-2 text-gray-400 text-base transition-all ${
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
                  placeholder="******"
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
                  className={` absolute left-0 top-2 px-2 text-gray-400 text-base transition-all ${
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
                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
