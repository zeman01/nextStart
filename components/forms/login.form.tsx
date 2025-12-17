"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../common/ui/inputs/input";
import { loginSchema } from "@/schemas/auth.schema";
import { ILogin } from "@/types/auth.types";
import Button from "../common/ui/buttons/button";
import { login } from '../../api/auth.api';
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


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

  const router = useRouter()
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

  // mutation function refactored

  // const login = async (data: ILogin) => {
  //   try {
  //     const response = await axios.post(
  //       "https://localhost:8080/api/auth/login",
  //       data
  //     );
  //     console.log(response);
  //     return response.data;
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   } catch (error: any) {
  //     throw error.response;
  //   }
  // };

  // ! React query mutation
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      //? toast message
      toast.success(response.message || 'Login Success')

      //? redirect to landing page
      router.replace('/')
      //? reset from
      reset()
    },
    onError: (error) => {
      //? toast error message
      toast.error(error.message || 'Login Failed')

    }
  })
  // ! On form Submit
  const onSubmit = async (data: ILogin) => {
    // console.log("submit", data);
    // reset();

    // ? call mutation function
    // try {
    //   const response = await login (data)
    //   console.log("onsubmit", response);

    // } catch (error) {
    //   console.log(error);
    // }
    mutate(data);
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
          <Button
          disabled={isPending}
          label={isPending ? 'Logging In' : "Login"}
          type="submit"
        />
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
