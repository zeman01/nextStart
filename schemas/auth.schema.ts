import * as yup from "yup";

// ! login schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

//! register
export const registerSchema = yup.object({
  first_name: yup.string().required("Name Required"),
  last_name: yup.string().required("Name Required"),
  gender: yup.string().required("Choose your gender"),
  phone: yup.number(),
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup.string().required("password is required"),
});
