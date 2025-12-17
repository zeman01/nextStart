/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC } from "react";
import { LuAsterisk } from "react-icons/lu";

type IProps = {
  label: string;
  register: any;
  error?: string;
  id: string;
  name: string;
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
};

const Select: FC<IProps> = ({
  id,
  label,
  name,
  register,
  error,
  type = "text", //! default prop value
  placeholder = "start typing",
}) => {
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
        <select
          {...register(name)}
          className={`border  rounded-sm px-2 py-3  ${
            error
              ? "focus:outline-red-500 border-red-500"
              : "focus:outline-blue-400 border-gray-400"
          }`}
          name={name}
          id={id}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
