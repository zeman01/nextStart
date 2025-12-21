import { GENDER } from "@/types/global.types";
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
  first_name: yup.string().required("First Name Required"),
  last_name: yup.string().required("Last Name Required"),
  gender: yup.string().oneOf(Object.values(GENDER), "Select Valid Gender").optional(),
  phone: yup.string().optional(),
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup.string().required("password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must match").required("Confirm Password Is required")
});
