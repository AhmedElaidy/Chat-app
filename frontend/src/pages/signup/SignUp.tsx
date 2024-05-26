import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [selectedGender, setSelectedGender] = useState("male");

  const { isLoading, signup } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const fullName = form.elements.namedItem("fullName") as HTMLInputElement;
    const username = form.elements.namedItem("username") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const confirmPassword = form.elements.namedItem(
      "confirmPassword"
    ) as HTMLInputElement;

    const inputs = {
      fullName: fullName.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      gender: selectedGender,
    };
    await signup(inputs);
  };

  const inputStyles = "w-full input input-bordered h-10";

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Johndoe"
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text text-black"> Password</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className={inputStyles}
            />
          </div>
          <GenderCheckbox
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />
          <Link
            to="/login  "
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
          >
            Already have an account?
          </Link>
          <div className="flex justify-center">
            <button
              className="btn btn-block btn-sm mt-2 border bg-slate-400 border-slate-700"
              disabled={isLoading}
            >
              {!isLoading ? (
                "Sign Up"
              ) : (
                <span className="loading loading-spinner text-white"></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
