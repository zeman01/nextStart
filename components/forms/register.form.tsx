"use client";
import { registerSchema } from "@/schemas/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IRegister } from "@/types/auth.types";
import Input from "../common/ui/inputs/input";
import Button from "../common/ui/buttons/button";
import { useMutation } from "@tanstack/react-query";
import { register as registerUser } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { GENDER } from "@/types/global.types";

// const RegisterForm = () => {
// const [formData, setFormData] = useState({
//   first_name: "",
//   last_name: "",
//   gender: "",
//   phone: "",
//   email: "",
//   password: "",
// });

// const {register} =useForm

// const onChange = (e:React,) => {
//   console.log(e.target.value);
//   console.log(e.target.name);
//   const name = e.target.name;
//   const value = e.target.value;
//   setFormData({ ...formData, [name]: value });
// };

// console.log(formData);

// const onSubmit = (e:React, FormEvent</HTMLFormElement>)=>{

// }

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: GENDER.MALE,
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  // ! React query mutation
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (response) => {
      //? toast message
      toast.success(response.message || "Registration Success !!!");

      //? redirect to landing page
      router.replace("/auth/login");
      //? reset from
      reset();
    },
    onError: (error) => {
      //? toast error message
      toast.error(error.message || "Something Went Wrong ");
    },
  });

  //! on form submit
  // const onSubmit = (data: any) => {
  //   console.log("submit", data);
  //   reset();
  // };
  const onSubmit = async (data: IRegister) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* name */}
        <div className="flex flex-row gap-10">
          {/* <div>
            <label htmlFor="first_name">First Name</label>
            <input
              {...register("first_name")}
              type="text"
              id="first_name"
              placeholder="John"
            />
          </div> */}
          <Input
            id="first_name"
            label="First Name"
            name="first_name"
            register={register}
            placeholder="John"
            required
            error={errors?.first_name?.message}
          />

          {/* <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              {...register("last_name")}
              type="text"
              id="last_name"
              placeholder="Doe"
            />
          </div> */}
          <Input
            id="last_name"
            label="Last Name"
            name="last_name"
            register={register}
            placeholder="Doe"
            required
            error={errors?.last_name?.message}
          />
        </div>
        {/* gender */}
        {/* <div>
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")} name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div> */}
        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-semibold" htmlFor={"gender"}>
            Gender
          </label>
          <select
            {...register("gender")}
            id="gender"
            className="border border-gray-400 rounded-sm px-2 py-3 focus:outline-blue-400"
          >
            {Object.entries(GENDER).map(([key, value]) => {
              return (
                <option key={key} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>

        {/* phone */}
        <Input
          id="phone"
          label="Phone"
          name="phone"
          register={register}
          placeholder="Enter Your Number"
          required
          error={errors?.last_name?.message}
        />

        {/* email input */}
        <Input
          id="email"
          label="Email"
          name="email"
          register={register}
          placeholder="johndoe@gmail.com"
          required
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
          required
          type="password"
        />
        {/* Confirm Password input */}
        <Input
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          register={register}
          placeholder="Enter confirmPassword"
          required
          error={errors?.confirmPassword?.message}
          type="password"
        />
        {/* submit button */}
        <Button
          disabled={isPending}
          label={isPending ? "Signing up....." : "Sign Up"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
