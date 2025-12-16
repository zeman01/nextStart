"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../common/ui/inputs/input";
import { loginSchema } from "@/schemas/auth.schema";
import { ILogin } from "@/types/auth.types";
import Button from "../common/ui/button/button";

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

// ! form validation
// ? refactor to auth.schema
// const LoginSchema = yup.object({
//   email: yup.string().email("Enter Valid email").required("email is required"),
//   password: yup.string().required("Password is required"),
// });

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
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const onSubmit = (data: ILogin) => {
    //
    console.log("submit", data);
    reset();
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* email input */}
        <Input
          id="email"
          label="Email"
          name="email"
          register={register}
          placeholder="johndoe@gmail.com"
          error={errors?.email?.message}
        />

        {/* Password input */}
        <Input
          id="password"
          label="Password"
          name="password"
          register={register}
          placeholder="Enter password"
          error={errors?.password?.message}
          type="password"
        />

        {/* <button className="bg-blue-500 p-3 text-white font-bold text-lg rounded mt-10 cursor-pointer">
          Login
        </button> */}
        <Button button="Login" />
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
