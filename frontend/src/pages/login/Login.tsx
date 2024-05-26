import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const inputStyles = "w-full input input-bordered h-10";
  const { isLoading, login } = useLogin();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = form.elements.namedItem("username") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const inputs = {
      username: username.value,
      password: password.value,
    };
    await login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="rounded-lg w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-300"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              className={inputStyles}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={isLoading}>
              {!isLoading ? (
                "Login"
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

export default Login;
