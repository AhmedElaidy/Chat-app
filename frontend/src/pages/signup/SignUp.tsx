import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="Johndoe"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-black"> Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href=""
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border bg-slate-400 border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

//Starter Code
// import GenderCheckbox from "./GenderCheckbox";

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text text-black">
//                 Full Name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10 "
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text text-black">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Johndoe"
//               className="w-full input input-bordered h-10 "
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text text-black"> Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text text-black">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckbox />
//           <a
//             href=""
//             className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block "
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border bg-slate-400 border-slate-700">
//               Sign  Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;