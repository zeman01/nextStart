import { GENDER } from "@/types/global.types";
// ?login
export type ILogin = {
  email: string;
  password: string;
};

//? register
export type IRegister = {
  first_name: string;
  last_name: string;
  phone?: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender?: GENDER;
};
