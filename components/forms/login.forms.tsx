"use client";
import React from "react";
import { useForm } from "react-hook-form";

// ! without react-hook-form
// const LoginForm = () => {
//   return (
//     <div>
//       <form className="flex flex-col gap-5">
//         {/* email input */}
//         <div className="flex flex-col gap-1">
//           <label className="text-[16px] font-semibold" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="border border-grey-400 rounded-sm px-2 py-3 focus:outline-blue-400"
//             id={"email"}
//             type="text"
//             placeholder="johndoe@mail.com"
//           />
//         </div>
//         {/* Password input */}
//         <div className="flex flex-col gap-1">
//           <label className="text-[16px] font-semibold" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="border border-grey-400 rounded-sm px-2 py-3 focus:outline-blue-400"
//             type="password"
//             id="password"
//             placeholder="password"
//           />
//         </div>

//         <button className="bg-blue-500 p-3 text-white font-bold text-lg rounded mt-10 cursor-pointer">
//           Login
//         </button>
//       </form>
//       <div>
//         <p className="text-blue-500 mt-1 cursor-pointer text-center text-[14px]">Forgot Password</p>
//       </div>
//     </div>
//   );
// };

// ! Using React-hook_form
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("submit", data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* email input */}
        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-semibold" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            className="border border-grey-400 rounded-sm px-2 py-3 focus:outline-blue-400"
            id={"email"}
            type="text"
            placeholder="johndoe@mail.com"
          />
        </div>
        {/* Password input */}
        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-semibold" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            className="border border-grey-400 rounded-sm px-2 py-3 focus:outline-blue-400"
            type="password"
            id="password"
            placeholder="password"
          />
        </div>

        <button className="bg-blue-500 p-3 text-white font-bold text-lg rounded mt-10 cursor-pointer">
          Login
        </button>
      </form>
      <div>
        <p className="text-blue-500 mt-1 cursor-pointer text-center text-[14px]">
          Forgot Password
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
