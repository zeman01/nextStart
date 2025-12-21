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
  required?: boolean;
};

const Select: FC<IProps> = ({
  id,
  label,
  name,
  register,
  error,
  type = "text", //! default prop value
  placeholder = "start typing",
  required = false,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        {/* label and icon */}
        <div className="flex">
          <label className="text-[16px] font-semibold" htmlFor={id}>
            {label}
          </label>
          {required && <LuAsterisk className="text-red-500" />}
        </div>
        <select
          {...register(name)}
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
    </>
  );
};

export default Select;
